const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });

app.get("/api/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'home_page.json'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});