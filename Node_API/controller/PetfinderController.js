const axios = require('axios');

class Petfinder {


    /****
     * TODO!!!!!
     * Adjust api calls from version 1 to version 2
     * version 2 is a lot cleaner and better in their results sets
     * it also handles images a lot better
     * 
     * But version 2 requires OAuth2
     * So find a way to generate valid tokens
     */

    constructor(API) {
        this.API = API
        this.testMethod = 'http://api.petfinder.com/pet.getRandom?key=' + this.API + '&output=full&format=json';
        this.prefix = "http://api.petfinder.com/v2/";
        this.suffix = '?key=' + this.API + '&output=full&format=json'

        this.limit = 25;
    }

    getPets() {
        const url = `${this.prefix}pet.getRandom${this.suffix}&count=${this.limit}&animal=dog`;
        let pets = [];
        axios.get(url)
            .then(res => {
                const data = res.data;
                for (let pet of data.petfinder.pet) {
                    console.log(pet.id.$t)
                    if (pet.media.photos.photo.length > 0) {
                        pets.push(pet);
                    }
                }
            })
            .catch(err => { throw err })
    }

    getPetsByCount(count) {
        const url = `${this.prefix}animals&limit=${count}`
        axios.get(url)
            .then(res => {
                const data = res.data;
                // TO DO
            })
    }

    getPetById(id) {
        const url = ``
        axios.get(url)
            .then( res=>{
                const data = res.data;
            })
            .catch(err => { throw err })
    }

    // Old Test call for Version 1
    // testAPICall() {
    //     express(this.testMethod)
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
}
module.exports = Petfinder