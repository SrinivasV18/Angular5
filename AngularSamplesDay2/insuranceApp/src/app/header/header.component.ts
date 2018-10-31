import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { PageLink } from '../models/pagelink';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  majHeading: string;
  logo: string;
  linkText: string;
  links: PageLink[];
  constructor() {
    this.majHeading = 'Life Save Insurance';
    this.logo = 'assets/images/logo.png';
    this.linkText = 'Login';
    this.links = [{ linkText: 'Home', linkRef: 'home', linkStyle: 'nav-link' },
    { linkText: 'Products', linkRef: 'products', linkStyle: 'nav-link' },
    { linkText: 'History', linkRef: 'history', linkStyle: 'nav-link' }]
  }
  ngOnInit() {
  }

}
