import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseIdeasPageRoutingModule } from './browse-ideas-page-routing.module';
import { BrowseIdeasPageComponent } from './browse-ideas-page.component';

@NgModule({
  declarations: [BrowseIdeasPageComponent],
  imports: [
    CommonModule,
    BrowseIdeasPageRoutingModule
  ]
})
export class BrowseIdeasPageModule { }
