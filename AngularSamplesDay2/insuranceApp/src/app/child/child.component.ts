import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
 
 
  @Input() name:string;

  constructor() { 
    console.log('child constructor called....');
    console.log('input property in  constructor - ' + this.name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('input property in onchange child --' + changes.name.previousValue);
    console.log('input propery in onchange child --' + changes.name.currentValue);
  }
  ngOnInit() {
    console.log('child on init called...');
    console.log('input property in init - ' + this.name);
  }

}
