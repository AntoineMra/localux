module.exports = app => {
    const Client = require("../controller/controllerClient")
    const Loc = require("../controller/controllerLoc")
    const Vehic = require("../controller/controllerVehic")
    let router = require("express").Router();

    router.get("/clients",Client.findAllClient);
    router.get("/loc/:datePrev/:heurePrev/:dateLoc",Loc.addLocation);
    router.get("/vehicule/:date",Vehic.findVehicChauffByDate);

}
