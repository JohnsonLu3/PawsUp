import * as $ from 'jquery';

export class ApiBean {

    path: string = "../../assets/api.json";
    key : string = "pleas change";

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

}
