const express = require("express");
const connectDB = require("./config/connectDb");
const commentRoutes = require("./routes/comment");
const personRoutes = require("./routes/person");
const app = express();
app.use(express.json());
const Port = 4800;

connectDB();

app.use("/api/person", personRoutes);
app.use("/api/comment", commentRoutes);
app.listen(Port, console.log(`app is runnig on port ${Port}`));
