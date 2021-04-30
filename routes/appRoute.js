module.exports = app => {
    const Client = require("../controller/controllerClient")
    const Loc = require("../controller/controllerLoc")
    let router = require("express").Router();

    router.get("/clients",Client.findAllClient);-
    router.get("/location/:vehiculeID/:clientID/:HeureDep/:HeureRet/:dateLoc",Loc.addLocation);
    router.get("/location/:date",Loc.getLocationsChauff);
    app.use('/api',router)
}
