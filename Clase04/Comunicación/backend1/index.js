const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

const urlBackend2 =
  process.env.SERVICE_BACKEND2 || "http://localhost:19020/api/message";

app.use(cors());

app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.get("/api/message", async (req, res) => {
  const response = await axios.get(urlBackend2);
  const msgBackend2 = response.data;
  res.json({
    msgBackend1: "Hola desde backend1",
    msgBackend2,
  });
});

const PORT = process.env.PORT || 19100;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
