import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BrowseIdeasPageRoutingModule } from './browse-ideas-page-routing.module';
import { BrowseIdeasPageComponent } from './browse-ideas-page.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';

@NgModule({
  declarations: [
    BrowseIdeasPageComponent,
    IdeasListComponent,
    IdeaDetailComponent
  ],
  imports: [
    CommonModule,
    BrowseIdeasPageRoutingModule,
    NgxDatatableModule
  ]
})
export class BrowseIdeasPageModule { }
