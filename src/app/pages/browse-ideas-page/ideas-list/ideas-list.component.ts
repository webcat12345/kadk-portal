import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KadkRoute } from '@kadk-core/utils/kadk-route.util';

@Component({
  selector: 'kadk-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss']
})
export class IdeasListComponent implements OnInit {

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company', sortable: false }
  ];

  constructor(
    private router: Router
  ) {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  ngOnInit() {
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect(e) {
    this.router.navigate([KadkRoute.BrowseIdeaById(e.selected[0].name)]);
  }

}
