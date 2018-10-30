import { Component, OnInit } from '@angular/core';
import { InsuranceAdvisor } from '../models/insurance-advisor';
import { InsuranceAPIService } from '../services/insurance-api.service';

@Component({
  selector: 'app-show-advisors',
  templateUrl: './show-advisors.component.html',
  styleUrls: ['./show-advisors.component.css']
})
export class ShowAdvisorsComponent implements OnInit {
advisorList:InsuranceAdvisor[];

  constructor(private insuranceService :InsuranceAPIService ) { }

  ngOnInit() {
    this.insuranceService.findAllAdvisors().subscribe(data=> this.advisorList=data,err=>console.log(err));
  }

}
