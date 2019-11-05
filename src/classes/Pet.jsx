export default class Pet{

    pet = {}

    constructor(name, link, images, id, age, gender, breed, size, address1, address2, city, state, postcode, shots, spayed, houseTrained, specialNeeds){
        this.pet.id = id;
        this.pet.name = name;
        this.pet.link = link;
        this.pet.images = images;
        this.pet.age = age;
        this.pet.gender = gender;
        this.pet.breed = breed;
        this.pet.size = size;
        this.pet.address1 = address1;
        this.pet.address2 = address2;
        this.pet.city = city;
        this.pet.state = state;
        this.pet.postcode = postcode;
        this.pet.shots = shots;
        this.pet.spayed = spayed;
        this.pet.houseTrained = houseTrained;
        this.pet.specialNeeds = specialNeeds;
    }

    constructor(obj){
        this.pet.id = obj.id;
        this.pet.name = obj.name;
        this.pet.link = obj.url;
        this.pet.images = getPhotosFromObj(obj);
        this.pet.age = obj.age;
        this.pet.gender = obj.gender;
        this.pet.breed = obj.breed;
        this.pet.size = obj.size;
        this.pet.address1 = obj.contact.address.address1;
        this.pet.address2 = obj.contact.address.address2;
        this.pet.city = obj.contact.address.city;
        this.pet.state = obj.contact.address.state;
        this.pet.postcode = obj.contact.address.postcode;
        this.pet.shots =  obj.attributes.shots_current;
        this.pet.spayed = obj.attributes.spayed_neutered;
        this.pet.houseTrained = obj.attributes.house_tained;
        this.pet.specialNeeds = obj.attributes.special_needs;
    }

    getPhotosFromObj(obj){
        let photos = [];

        for(let i = 0; i < obj.photos.length; i++){
            photos.push(obj.photos[i].full);
        }
    }
}