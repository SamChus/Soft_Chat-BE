const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Hello ols login!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// "start": "node ./bin/www"
