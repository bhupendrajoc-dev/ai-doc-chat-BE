const express = require("express");
const router = express.Router();

const upload = require("../config/multer");
const { uploadDoc } = require("../controllers/uploadController");

router.post("/", upload.single("file"), uploadDoc);

module.exports = router;