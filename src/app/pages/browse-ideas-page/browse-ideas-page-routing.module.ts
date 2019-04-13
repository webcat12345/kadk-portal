import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseIdeasPageComponent } from './browse-ideas-page.component';

const routes: Routes = [
  {path: '', component: BrowseIdeasPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseIdeasPageRoutingModule { }
