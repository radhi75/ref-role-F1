const express = require("express");
const {
  Addperson,
  Getpersons,
  Delperson,
  Editperson,
} = require("../controlles/person");

const personRoutes = express.Router();

personRoutes.post("/addperson", Addperson);
personRoutes.get("/getpersons", Getpersons);
personRoutes.delete("/delperson/:id", Delperson);
personRoutes.put("/editperson/:id", Editperson);

module.exports = personRoutes;
