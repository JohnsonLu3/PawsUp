const axios = require("axios");
const config = require("../config")
const petfinder = require("@petfinder/petfinder-js");

class Petfinder {
  constructor() {

    this.limit = 25;
    this.client = new petfinder.Client({
      apiKey: config.clientId,
      secret: config.clientSecret
    });

    this.getDogs();
  }

  getDogs = filter => {
    filter = { ...filter, ...{ type: "Dog", limit: this.limit } };

    return this.client.animal
      .search(filter)
      .then(res => {
        return res.data.animals;
      })
      .catch(err => {
        if (err.code === 500) {
          const errMessage = 'unable to fetch pets';
          console.error(errMessage);
          return errMessage;
        }
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
      .search({})
      .then(res => {
        return res.data.organizations;
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
