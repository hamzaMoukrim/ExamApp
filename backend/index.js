const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");
app.use(express.json({ limit: "500mb" }));
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: true }));
const server = require("http").createServer(app);
const PORT = process.env.PORT || 5000;

//init
require("./db");

app.use(cors());
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "angular")));

/******************************************************** */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

app.use("/api", require("./api/index"));

/******************************************************** */

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
