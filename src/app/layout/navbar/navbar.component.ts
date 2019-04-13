import { Component, OnInit } from '@angular/core';

import { KadkRoute } from '@kadk-core/utils/kadk-route.util';

@Component({
  selector: 'kadk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  KadkRoute = KadkRoute;

  constructor() { }

  ngOnInit() {
  }

}
