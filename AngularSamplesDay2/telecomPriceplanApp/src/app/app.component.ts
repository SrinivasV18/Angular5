import { Component } from '@angular/core';
import { Mobileplans } from './services/mobileplans';
import { PricePlanServiceService } from './services/price-plan-service.service';
import { myLogger } from './custom-decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@myLogger()
export class AppComponent {
  title = 'telecomPriceplanApp';
  plansList:Mobileplans[];

  constructor(private mobileService :PricePlanServiceService ) { }

  ngOnInit() {
    this.mobileService.findAllPlans().subscribe(data=> this.plansList=data,err=>console.log(err));
  }
  selectedplan(plan : any){
    console.log(plan);
    alert('Selected Plan - ' + plan.price);
  }
}
