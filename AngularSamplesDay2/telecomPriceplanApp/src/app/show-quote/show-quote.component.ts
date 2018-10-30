import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {
  isDisabled: boolean = true;
  age: number = 18;
  constructor() { }

  ngOnInit() {
  }

  showPolicy(){
    console.log('plan details');
  }

  changeStatus(){
    if(this.age >50){
      this.isDisabled = false;
    }
  }
}
