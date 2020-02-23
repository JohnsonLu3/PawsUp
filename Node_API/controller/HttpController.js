const Petfinder = require("./PetfinderController");
const pf = new Petfinder();
class HttpController {
  constructor(app) {
    this.app = app;
    this.setGetReuqest();
  }

  /**
   * Whats a way I can use the PF api to get pets with out dupes
   * currently don't see any real solution. Will sit on.
   */

  setGetReuqest = () => {

    this.app.get("/getPets", (req, res) => {
      if (req.query.id) {
        pf.getDogByID(req.query.id).then(result => {
          res.send(result);
        });
      } else {
        const filters = {
          age: req.query.age,
          gender: req.query.gender,
          size: req.query.size,
          spayed_neutered: req.query.spayed_neutered,
          house_trained: req.query.house_trained,
          shots_current: req.query.shots_current,
          location: req.query.location,
          page: req.query.page
        };

        pf.getDogs(filters).then(result => {
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
