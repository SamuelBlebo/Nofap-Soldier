require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const defaultRoutes = require("./routes/defaultRoutes");
const userRoutes = require("./routes/user");
const streakRoutes = require("./routes/streakRoutes");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//Routes
app.use(defaultRoutes);
app.use("/api/user", userRoutes);
app.use("/api/streak", streakRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
