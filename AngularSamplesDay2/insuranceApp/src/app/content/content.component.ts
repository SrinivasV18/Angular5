import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Policy } from './policyinterface';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  listPolicies: Policy[] = [];
  feedback1: string;
  feedback2: string;

  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;

  constructor() {
    this.listPolicies = [{ policyName: 'Jeevan Anand', policyDescription: 'About Jeevan Anand' },
    { policyName: 'Jeevan Akshay', policyDescription: 'About Jeevan Akshay' }
    ];
    this.feedback1 = '';
  }
  ngAfterViewInit() {
    this.feedback1 = this.compRef.getCorpCustomerFeedBack();
    this.feedback2 = this.compRef.getRetailCustomerFeedBack();
  }
  ngOnInit() {
  }



}
