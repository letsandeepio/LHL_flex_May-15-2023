const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = 3000;

// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const rocketsDB = {
  bfr: {
    rocket_id: "bfr",
    rocket_name: "Big Falcon Rocket",
    rocket_type: "rocket",
    wikipedia: "https://en.wikipedia.org/wiki/BFR_(rocket)",
  },
  falcon1: {
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
    rocket_id: "falcon1",
    rocket_name: "Falcon 1",
    rocket_type: "rocket",
  },
  falconheavy: {
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
    rocket_id: "falconheavy",
    rocket_name: "Falcon Heavy",
    rocket_type: "rocket",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World! Welcome to our SpaceX App!");
});

app.get("/rockets", (req, res) => {
  const header = "List of Rockets";

  const listOfRockets = Object.values(rocketsDB);

  const templateVars = {
    header,
    rockets: listOfRockets,
  };

  res.render("rockets", templateVars);
});

app.get("/rockets/new", (req, res) => {
  res.render("new");
});

app.get("/rockets/:id", (req, res) => {
  const rocketID = req.params.id;

  const rocket = rocketsDB[rocketID];

  const templateVars = {
    rocket,
  };

  if (rocket) {
    res.render("rocket", templateVars);
  } else {
    res.status(404).send("Rocket not found");
  }
});

app.post("/rockets", (req, res) => {
  // create a new rocket
  // we need to access form
  const rocketname = req.body.rocket_name;

  const rocket_id = Date.now();

  const newRocket = {
    rocket_id,
    rocket_name: rocketname,
    rocket_type: "rocket",
    wikipedia: `https://en.wikipedia.org/wiki/${rocketname}`,
  };

  rocketsDB[rocket_id] = newRocket;

  res.redirect("/rockets");
});

app.post("/rockets/:id/delete", (req, res) => {
  const rocketId = req.params.id;

  delete rocketsDB[rocketId];

  res.redirect("/rockets");
});

app.post("/rockets/:id", (req, res) => {
  const rocketId = req.params.id;
  const newRocketName = req.body.rocket_name;

  rocketsDB[rocketId].rocket_name = newRocketName;

  res.redirect("/rockets");
});

app.listen(PORT, () => {
  console.log(`Rocket app running successfully at port ${PORT}`);
});
