const app = require("./app.js");
const config = require("./app/config/index.js");

const port = config.app.port;

// console.log(port);

app.listen(port, () =>{
    console.log(`Server is runing on port ${port}`);
});