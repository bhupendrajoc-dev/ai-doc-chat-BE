const express = require("express");
const router = express.Router();

const { ask } = require("../controllers/chatController");

router.post("/", ask);

module.exports = router;