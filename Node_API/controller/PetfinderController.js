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

    console.log(this.clientId)
    console.log(this.clientSecret)

    this.client.animal
      .search()
      .then(function(response) {
        console.log(response.data.animals);
      })
      .catch(function(err) {
        throw err
      });
  }

}
module.exports = Petfinder;
