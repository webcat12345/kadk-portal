import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackPageComponent } from './feedback-page.component';

const routes: Routes = [
  {path: '', component: FeedbackPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackPageRoutingModule { }
