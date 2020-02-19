const Petfinder = require("./PetfinderController");
const pf = new Petfinder();
class HttpController {
  constructor(app) {
    this.app = app;
    this.setGetReuqest();
  }

  setGetReuqest = () => {
    this.app.get("/getPets", (req, res) => {
      pf.getDogs().then(result =>{
          res.send(result)
      });
    });

    this.app.get("/getPets:id", (req, res) => {
        
      });
  };
}
module.exports = HttpController;
