const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  next();
});

app.use("/", express.static("./public"));

app.get("/healthcheck", (req, res) => {
  res.send("OK");
});

app.get("/api/config", (req, res) => {
  res.json({
    backend1:
      process.env.SERVICE_BACKEND1 || "http://localhost:19100/api/message",
  });
});

const PORT = process.env.PORT || 19000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
