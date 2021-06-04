module.exports = app => {
    const Client = require("../controller/controllerClient")
    const Loc = require("../controller/controllerLoc")
    const Vehicule = require("../controller/controllerVehicule")
    const Historique = require("../controller/controllerHisto")
    let router = require("express").Router();

    router.get("/clients",Client.findAllClient);-
    router.get("/location/:vehiculeID/:clientID/:HeureDep/:HeureRet/:dateLoc",Loc.addLocation);
    router.get("/vehicule/:date",Vehicule.getVehiculeChauff);
    router.get("/historique/:date/:nbplace",Historique.addHistorique);
    router.get("/historique/:id",Historique.getHistorique);
    app.use('/api',router)
}

