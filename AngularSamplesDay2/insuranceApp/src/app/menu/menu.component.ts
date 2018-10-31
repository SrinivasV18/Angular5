import { Component, OnInit, Input } from '@angular/core';
import { PageLink } from '../models/pagelink';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
@Input() linksFromParent: PageLink[];
  constructor() { }

  ngOnInit() {
  }

}
