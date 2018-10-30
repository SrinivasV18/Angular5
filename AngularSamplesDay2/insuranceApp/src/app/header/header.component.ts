import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  majHeading: string;
  logo: string;

  constructor() {
    this.majHeading = 'Life Save Insurance';
    this.logo = 'assets/images/logo.png';
  }
  ngOnInit() {
  }

}
