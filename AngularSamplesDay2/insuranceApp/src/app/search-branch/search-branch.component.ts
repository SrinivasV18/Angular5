import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentAdderService } from '../dynamic-component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {
  searchCity: string;
  branchList: string[];
  @ViewChild('locationInfo', { read: ViewContainerRef }) viewRef: ViewContainerRef;
  constructor(private service: DynamicComponentAdderService) { }
  ngOnInit() {
  }
  onChange(val) {
    this.branchList = val;
  }
  add() {
    this.service.setViewRef(this.viewRef);
    const comp =  this.service.addComponent(ShowLocationComponent);
    const locationComp = (<ShowLocationComponent>comp.instance);
    locationComp.selectedLocation.subscribe(value => {
      this.searchCity = value; 
      value.length > 0 ? this.remove() : '';
     });
  }

  remove() {
    this.viewRef.detach();
  }

  
}
