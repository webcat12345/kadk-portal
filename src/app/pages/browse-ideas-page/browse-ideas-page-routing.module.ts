import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';

const routes: Routes = [
  {path: '', component: IdeasListComponent},
  {path: ':id', component: IdeaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseIdeasPageRoutingModule { }
