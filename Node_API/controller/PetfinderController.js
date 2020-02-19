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
        return res.data.animal;
      })
      .catch(err => {
        return `No pet Found by id: ${id}`;
      });
  };

  getDogPhotosById = id => {
    return this.client.animal
      .show(id)
      .then(res => {
        return res.data.animal.photos;
      })
      .catch(err => {
        return `No pet Found by id: ${id}`;
      });
  };

  getOrganizations = () => {
    return this.client.organization
      .search()
      .then(res => {
        return res.data.organization;
      })
      .catch(err => {
        throw err;
      });
  };

  getOrganizationByID = id => {
    return this.client.organization
      .show(id)
      .then(res => {
        return res.data.organization;
      })
      .catch(err => {
        return `No organization Found by id: ${id}`;
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
