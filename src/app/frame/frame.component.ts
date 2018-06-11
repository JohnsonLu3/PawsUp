import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
  }

}
