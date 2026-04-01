const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/uploadRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoutes);
app.use("/chat", chatRoutes);
app.get('/',(req,res)=>{
    res.send("Hello from server")
})

module.exports = app;