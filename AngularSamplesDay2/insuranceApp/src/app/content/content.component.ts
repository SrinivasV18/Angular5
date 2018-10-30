import { Component, OnInit } from '@angular/core';
import {Policy} from './policyinterface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listPolicies: Policy[] = [];
  constructor() { 
    this.listPolicies = [{policyName: 'Jeevan Anand', policyDescription:'About Jeevan Anand'},
    {policyName: 'Jeevan Akshay', policyDescription:'About Jeevan Akshay'}
  ]
  }

  ngOnInit() {
  }

}
