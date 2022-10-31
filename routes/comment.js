const express = require("express");
const {
  Addcomment,
  Getcomment,
  Delcomment,
  Editcomment,
} = require("../controlles/comment");
const commentRoutes = express.Router();

commentRoutes.post("/add/:id", Addcomment);
commentRoutes.get("/all", Getcomment);
commentRoutes.delete("/del/:id", Delcomment);
commentRoutes.put("/edit/:id", Editcomment);

module.exports = commentRoutes;
