import { Component, OnInit } from '@angular/core';
import { Testimony } from '../models/testimony';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getRetailCustomerFeedBack(): string {
    return 'Claims processing is prompt and received the payment on time...';
  }
  getCorpCustomerFeedBack(): Testimony {
    return {id:101, name:'Nice Work....'};
    //return 'Door step service by the advisors is very much appreciated...';
  }

}
