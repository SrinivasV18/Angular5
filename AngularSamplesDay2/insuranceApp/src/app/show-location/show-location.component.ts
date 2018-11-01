import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.css']
})
export class ShowLocationComponent implements OnInit {
selectedLocation : BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  ngOnInit() {
  }

  capture(value: string){
    console.log('location-' + value);
    this.selectedLocation.next(value);
  }
}
