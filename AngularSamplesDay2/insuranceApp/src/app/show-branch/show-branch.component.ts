import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {
  @Input() cityName: string;
  @Output() branches: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
    console.log(`In Constructor - ${this.cityName}`);
   }

  ngOnInit() {
    console.log(`In Init - ${this.cityName}`);
  }
  sendBranches() {
    if (this.cityName === 'hyd') {
      this.branches.emit(['lingampally', 'madhapur', 'miyapur']);
    } else {
      this.branches.emit(['patel nagar', 'gandhi nagar', 'indira nagar']);
    }
  }
}
