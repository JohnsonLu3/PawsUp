import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ApiBean } from '../beans/api-bean';
import { Pet } from '../beans/pet';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  providers:  []
})
export class FrameComponent implements OnInit {
  api: string = "";
  constructor() { }

  setPet(pet, petData){
    console.log("g");
  } 
  
  ngOnInit() {
    //  let api = new ApiBean();
    //  let key = api.getAPI();
    //  let petData = api.sendRequest("");
    let pet = new Pet();

    let url = "http://api.petfinder.com/pet.getRandom?key=83317bdc93b7ef7d42a64adf594bf813&animal=dog&format=json&output=full&callback=?";
        $.getJSON( url, function( data ) {
            let petData = data["petfinder"]["pet"];
            
            console.log(petData);
    }
  }

}
