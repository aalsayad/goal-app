const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

//Connect to MongoDB
connectDB();

//Innit Express
const app = express();

//To use requests using the middleware (Accepting body requests)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

//Error Handler Middleware (Send Content Type of JSON instead of HTML)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server stated on port ${port}`);
});
