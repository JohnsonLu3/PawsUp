const Petfinder = require("./PetfinderController");
const pf = new Petfinder();
class HttpController {
  constructor(app) {
    this.app = app;
    this.setGetReuqest();
  }

  setGetReuqest = () => {
    this.app.get("/getPets", (req, res) => {
      if (req.query.id) {
        pf.getDogByID(req.query.id).then(result => {
          res.send(result);
        });
      } else {
        pf.getDogs().then(result => {
          res.send(result);
        });
      }
    });

    this.app.get("/getPetPhotos", (req, res) => {
      if (req.query.id) {
        pf.getDogPhotosById(req.query.id).then(result => {
          res.send(result);
        });
      } else {
        res.send("please prove id, ie: /getPetPhotos?id=XXXXXX");
      }
    });
    this.app.get("/getOrganization", (req, res) => {
      if (req.query.id) {
        pf.getOrganizationByID(req.query.id).then(result => {
          res.send(result);
        });
      } else {
        pf.getOrganizations().then(result => {
          res.send(result);
        });
      }
    });
  };
}
module.exports = HttpController;
