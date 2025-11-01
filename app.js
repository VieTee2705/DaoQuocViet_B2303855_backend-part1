// module app
const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = express();

app.use(cors());
app.use(express.json());

// app.use(cors());: Dòng này yêu cầu ứng dụng app sử dụng middleware cors. Khi có bất kỳ yêu cầu nào đến, cors() sẽ được chạy để thêm các header cần thiết vào phản hồi (response), cho phép trình duyệt ở các domain khác nhận được dữ liệu.

// app.use(express.json());: Đây là một middleware có sẵn trong Express. Nó có nhiệm vụ phân tích (parse) các yêu cầu đến có định dạng JSON. Khi một client (ví dụ: frontend) gửi dữ liệu lên server qua phương thức POST hoặc PUT dưới dạng JSON, middleware này sẽ đọc và chuyển đổi chuỗi JSON đó thành một đối tượng JavaScript để bạn có thể dễ dàng sử dụng trong req.body.

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});


app.use("/api/contacts", contactsRouter);
//...

//xu ly loi
const ApiError = require("./app/api-error");
app.use("/api/contacts", contactsRouter);

// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;