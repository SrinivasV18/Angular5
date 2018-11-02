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
    this.links = [
      { linkText: 'Login', linkRef: 'login', linkStyle: 'nav-link' },
    { linkText: 'Products', linkRef: 'products', linkStyle: 'nav-link' },
    { linkText: 'History', linkRef: 'history', linkStyle: 'nav-link' },
    { linkText: 'Branches', linkRef: 'branches', linkStyle: 'nav-link' },
    { linkText: 'Location', linkRef: 'location', linkStyle: 'nav-link' },
    { linkText: 'Advisors', linkRef: 'advisors', linkStyle: 'nav-link' },
    { linkText: 'Logout', linkRef: 'logout', linkStyle: 'nav-link' }
  ]
  }
  ngOnInit() {
  }
}
