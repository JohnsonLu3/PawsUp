class Pet{
    constructor(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.link = obj.url;
        this.images = this.getPhotosFromObj(obj);
        this.age = obj.age;
        this.gender = obj.gender;
        this.breed = {};
        this.breed.primary = obj.breeds.primary;
        this.breed.secondary = obj.breeds.secondary;
        this.breed.mixed = obj.breeds.mixed;
        this.size = obj.size;
        this.address1 = obj.contact.address.address1;
        this.address2 = obj.contact.address.address2;
        this.city = obj.contact.address.city;
        this.state = obj.contact.address.state;
        this.postcode = obj.contact.address.postcode;
        this.shots =  obj.attributes.shots_current.toString();
        this.spayed = obj.attributes.spayed_neutered.toString();
        this.houseTrained = obj.attributes.house_trained.toString();
        this.specialNeeds = obj.attributes.special_needs.toString();
    }
}
module.exports = Pet