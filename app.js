const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//ROUTES
const indexRoute = require("./routes/index");
const userRoute = require("./routes/user");

app.use("/", indexRoute);
app.use("/user", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server running of port ", PORT));
