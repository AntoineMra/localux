var sql = require('./db.js');

//client constructeur
var client = function(client){
    this.id = client.id;
    this.nom = client.nom;
    this.prenom = client.prenom;
    this.mail = client.mail;
    this.tel = client.tel;
    this.adresse = client.addresse;
    this.cp = client.cp;
    this.ville = client.ville;
};

client.getclientByMail = function (clientMail, result) {
        sql.query("Select * from clients where mail = ? ", clientMail, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

