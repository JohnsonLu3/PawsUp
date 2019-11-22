export default class Pet{

    pet = {}

    constructor(obj){
        this.pet.id = obj.id;
        this.pet.name = obj.name;
        this.pet.link = obj.url;
        this.pet.images = this.getPhotosFromObj(obj);
        this.pet.age = obj.age;
        this.pet.gender = obj.gender;
        this.pet.breed = {};
        this.pet.breed.primary = obj.breeds.primary;
        this.pet.breed.secondary = obj.breeds.secondary;
        this.pet.breed.mixed = obj.breeds.mixed;
        this.pet.size = obj.size;
        this.pet.address1 = obj.contact.address.address1;
        this.pet.address2 = obj.contact.address.address2;
        this.pet.city = obj.contact.address.city;
        this.pet.state = obj.contact.address.state;
        this.pet.postcode = obj.contact.address.postcode;
        this.pet.shots =  obj.attributes.shots_current;
        this.pet.spayed = obj.attributes.spayed_neutered;
        this.pet.houseTrained = obj.attributes.house_trained;
        this.pet.specialNeeds = obj.attributes.special_needs;
    }

    getPhotosFromObj(obj){
        let photos = [];

        for(let i = 0; i < obj.photos.length; i++){
            photos.push(obj.photos[i].full);
        }

        return photos;
    }
}