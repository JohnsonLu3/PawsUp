import * as $ from 'jquery';

export class ApiBean {

    path: string = "../../assets/api.json";
    key : string = "pleas change";
    // request = require('request');

    getAPIFile(){
       var apiFile = (function() {
            var apiFile = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': "../../assets/api.json",
                'dataType': "json",
                'success': function (data) {
                    apiFile = data;
                }
            });
            return apiFile;
        })();
       return apiFile;
    }

    getAPI(){
        let file = this.getAPIFile();
        this.key = file.API;

        return this.key;
    }

    sendRequest(url){
        url = "http://api.petfinder.com/pet.getRandom?key=83317bdc93b7ef7d42a64adf594bf813&animal=dog&format=json&output=full";

    //     this.request(url, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body);
    //     }
    //     });
    // }
    

}
