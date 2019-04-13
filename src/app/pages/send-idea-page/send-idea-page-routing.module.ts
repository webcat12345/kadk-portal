import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendIdeaPageComponent } from './send-idea-page.component';

const routes: Routes = [
  {path: '', component: SendIdeaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendIdeaPageRoutingModule { }
