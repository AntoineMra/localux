module.exports = app => {
    const Client = require("../controller/controllerClient")
    const Loc = require("../controller/controllerLoc")
    const Vehicule = require("../controller/controllerVehicule")
    let router = require("express").Router();

    router.get("/clients",Client.findAllClient);-
    router.get("/location/:vehiculeID/:clientID/:HeureDep/:HeureRet/:dateLoc",Loc.addLocation);
    router.get("/vehicule/:date",Vehicule.getVehiculeChauff);
    app.use('/api',router)
}

