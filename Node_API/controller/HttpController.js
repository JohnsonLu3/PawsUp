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
  };
}
module.exports = HttpController;
