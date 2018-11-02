import { Component, OnInit, ViewChild } from '@angular/core';
import { PolicyDetail } from '../policy-detail';
import { InsuranceAPIService } from '../services/insurance-api.service';

@Component({
  selector: 'app-showpolicydetail',
  templateUrl: './showpolicydetail.component.html',
  styleUrls: ['./showpolicydetail.component.css']
})
export class ShowpolicydetailComponent implements OnInit {
  srcName: string = '';
  idxPos : number;
  toggleForm = false;
  showUp = true;
  showDown = false;
  page : number;
  policyData: PolicyDetail = {
    id: 0,
    policyHolderName: '',
    policyAmount: 0,
    maturityDate: new Date()
  };
  buttonText = 'Add';
  policyList: PolicyDetail[] = [];
  @ViewChild('f') form: any;
  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
    this.service.findPolicy().subscribe(data => this.policyList = data);
  }

  submit() {
    if(this.buttonText === 'Add'){
    this.service.addPolicy(this.policyData).subscribe(response => {
      this.policyList.push(response);
    });
  }
  else{
    this.service.updatePolicy(this.policyData).subscribe(response => {
      this.policyList[this.idxPos] = response;
    });
  }
  this.form.reset();
  }
  update(selectedPolicy){
    this.idxPos =  this.policyList.indexOf(selectedPolicy);
    this.buttonText='Update';
    this.policyData = selectedPolicy;
  }
  remove(selectedPolicy){
    const idxPos =  this.policyList.indexOf(selectedPolicy);
    this.service.removePolicy(selectedPolicy).subscribe(response => {
      this.policyList.splice(idxPos,1);
    });
  }
  showForm(){
    this.showUp = !this.showUp;
    this.showDown = !this.showDown;
    this.toggleForm = !this.toggleForm;
  }
}
