import { Component, OnInit } from '@angular/core';
import { PolicyDetail } from '../policy-detail';
import { InsuranceAPIService } from '../services/insurance-api.service';

@Component({
  selector: 'app-showpolicydetail',
  templateUrl: './showpolicydetail.component.html',
  styleUrls: ['./showpolicydetail.component.css']
})
export class ShowpolicydetailComponent implements OnInit {
  srcName: string = '';
policyList: PolicyDetail[];
  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
    this.service.findPolicy().subscribe(data => this.policyList = data);
  }

}
