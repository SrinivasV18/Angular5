import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, AfterViewInit {
  user = '';
  constructor() {
    console.log('Inside constructor....');
  }

  ngOnInit() {
    console.log('inside on Init...');
  }
  ngAfterViewInit(): void {
   console.log('After View Init Called....');
  }


}
