const axios = require("axios");
var petfinder = require("@petfinder/petfinder-js");

class Petfinder {
  constructor() {
    this.clientId = process.env.API_PETFINDER;
    this.clientSecret = process.env.API_PETFINDER_SECRET;
    this.limit = 25;
    this.client = new petfinder.Client({
      apiKey: this.clientId,
      secret: this.clientSecret
    });

    this.getDogs();
  }

  getDogs = () => {
    return this.client.animal
      .search({ type: "Dog", limit: this.limit })
      .then(res => {
        return res.data.animals;
      })
      .catch(err => {
        throw err;
      });
  };

  getDogsByFilter = filter => {
    return this.client.animal
      .search(filter)
      .then(res => {
        return res.data.animals;
      })
      .catch(err => {
        throw err;
      });
  };

  getDogByID = id => {
    return this.client.animal
      .show(id)
      .then(res => {
        console.log(res.data.animal);
        return res.data.animal;
      })
      .catch(err => {
        throw err;
      });
  };

  removeNonPictured = dogs => {
    for (let i = 0; i < dogs.length; i++) {
      if (dogs[i].photos.length === 0) {
        console.log(dogs[i].id);
      }
    }
  };
}
module.exports = Petfinder;
