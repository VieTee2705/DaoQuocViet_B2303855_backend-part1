const express = require("express");
const contacts = require("../controller/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .get(contacts.create)
    .get(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorites);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);


module.exports = router;