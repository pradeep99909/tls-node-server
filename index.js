const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post(["/", "/:name"], (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  greeting = "<h1>Hello From Node on Fly!</h1>";
  const name = req.params["name"];
  const data = req.body;
  console.log("/ data ::",data)
  if (name) {
    res.send(greeting + "</br>and hello to " + name, data);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));