const express = require("express");

const app = express();

app.use(express.json());

app.post("/add-client", async (req, res) => {
  const { Name } = req.body;
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("server is running in port 4000");
});
