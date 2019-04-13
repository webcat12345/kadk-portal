import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackPageRoutingModule } from './feedback-page-routing.module';
import { FeedbackPageComponent } from './feedback-page.component';

@NgModule({
  declarations: [FeedbackPageComponent],
  imports: [
    CommonModule,
    FeedbackPageRoutingModule
  ]
})
export class FeedbackPageModule { }
