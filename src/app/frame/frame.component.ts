import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ApiBean } from '../beans/api-bean';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  providers:  []
})
export class FrameComponent implements OnInit {
  api: string = "";
  constructor() { }

  ngOnInit() {
     let api = new ApiBean();
     let key = api.getAPI();
  }

}
