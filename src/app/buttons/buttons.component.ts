import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() color: string;
  @Input() name: string;
  @Input() ico: string;
  @Input() ref: string;
  @Input() func: string;
  
  constructor() { }

  ngOnInit() {
  }

}
