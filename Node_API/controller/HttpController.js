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

    this.app.get("/getPets", async (req, res) => {
      if (req.query.id) {
        try {
          const result = await pf.getDogByID(req.query.id)
          res.send(result);
        } catch (err) {
          throw err;
        }

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
        try {
          const result = await pf.getDogs(filters)
          res.send(result);
        } catch (err) {
          throw err;
        }
      }
    });

    this.app.get("/getPetPhotos", async (req, res) => {
      if (req.query.id) {
        try {
          const result = await pf.getDogPhotosById(req.query.id)
          res.send(result);
        } catch (err) {
          throw err;
        }
      } else {
        res.send("please prove id, ie: /getPetPhotos?id=XXXXXX");
      }
    });

    this.app.get("/getOrganization", async (req, res) => {
      if (req.query.id) {
        try {
          const result = await pf.getOrganizationByID(req.query.id)
          res.send(result);
        } catch (err) {
          throw err
        }
      } else {
        try {
          const result = pf.getOrganizations()
          res.send(result);
        } catch (err) {
          throw err
        }
      }
    });
  };
}
module.exports = HttpController;
