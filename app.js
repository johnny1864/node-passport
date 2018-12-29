const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

// DB CONNENTION
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//ROUTES
const indexRoute = require("./routes/index");
const userRoute = require("./routes/user");

app.use("/", indexRoute);
app.use("/users", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server running of port ", PORT));
