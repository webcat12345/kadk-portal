import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendIdeaPageRoutingModule } from './send-idea-page-routing.module';
import { SendIdeaPageComponent } from './send-idea-page.component';

@NgModule({
  declarations: [SendIdeaPageComponent],
  imports: [
    CommonModule,
    SendIdeaPageRoutingModule
  ]
})
export class SendIdeaPageModule { }
