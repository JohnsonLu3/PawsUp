const config = require("../config")
const petfinder = require("@petfinder/petfinder-js");

class Petfinder {
  constructor() {

    this.limit = 25;
    this.client = new petfinder.Client({
      apiKey: config.clientId,
      secret: config.clientSecret
    });
  }

  getDogs = async filter => {
    filter = { ...filter, ...{ type: "Dog", limit: this.limit } };
    try {
      const res = await this.client.animal.search(filter)
      return res.data.animals;
    } catch (err) {
      throw err;
    }
  };

  getDogByID = async id => {
    try {
      const res = await this.client.animal.show(id)
      return res.data.animal;
    } catch (err) {
      return `No pet Found by id: ${id}`;
    }
  };

  getDogPhotosById = async id => {
    try {
      const res = await this.client.animal.show(id);
      return res.data.animal.photos;
    } catch (err) {
      return `No pet Found by id: ${id}`;
    }
  };

  getOrganizations = async () => {
    try {
      const res = await this.client.organization.search({})
      return res.data.organizations;
    } catch (err) {
      throw err;
    }
  };

  getOrganizationByID = async id => {
    try {
      const res = this.client.organization.show(id)
      return res.data.organization;
    } catch (err) {
      return `No organization Found by id: ${id}`;
    }
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
