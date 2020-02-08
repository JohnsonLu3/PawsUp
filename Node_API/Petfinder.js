const fetch = require('node-fetch');

class Petfinder {

    constructor(API) {
        this.API = API
        this.testMethod = 'http://api.petfinder.com/pet.getRandom?key=' + this.API + '&output=full&format=json';
        this.prefix = "http://api.petfinder.com/v2/";
        this.suffix = '?key=' + this.API + '&output=full&format=json'

        this.limit = 25;
    }

    getPets() {
        let url = `${this.prefix}pet.getRandom${this.suffix}&count=${this.limit}&animal=dog`;
        let pets = [];
        fetch(url)
            .then(res => res.json())
            .then(json =>{
                for(let pet of json.petfinder.pet){
                    console.log(pet.id.$t)
                    if(pet.media.photos.photo.length > 0){
                        pets.push(pet);
                    }
                }
            })
            .catch(err =>{
                console.log(err);
            })
    }

    getPetsByCount(count) {
        let url = `${this.prefix}animals&limit=${count}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(json =>{
                console.log(json.petfinder.pet)
            })
            .catch(err =>{
                console.log(err);
            })
    }

    getPetById(){
        let url = this.prefix + "pet.find&count=25&animal=dog&" + this.suffix;
    }


    testAPICall() {
        fetch(this.testMethod)
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.log(err);
            });
    }
}
module.exports = Petfinder