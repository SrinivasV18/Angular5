import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Policy } from './policyinterface';
import { TestimonyComponent } from '../testimony/testimony.component';
import { Testimony } from '../models/testimony';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  listPolicies: Policy[] = [];
  feedback1: Testimony ;
  feedback2: string;

  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;

  constructor(private ref: ChangeDetectorRef) {
    this.listPolicies = [{ policyName: 'Jeevan Anand', policyDescription: 'About Jeevan Anand' },
    { policyName: 'Jeevan Akshay', policyDescription: 'About Jeevan Akshay' }
    ];
  }
  ngAfterViewInit() {
    this.feedback1 = this.compRef.getCorpCustomerFeedBack();
    this.feedback2 = this.compRef.getRetailCustomerFeedBack();
    this.ref.detectChanges();
  }
  ngOnInit() {
  }



}
