import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModalModule } from '@kadk-common/alert-modal/alert-modal.module';

import { SendIdeaPageRoutingModule } from './send-idea-page-routing.module';
import { SendIdeaPageComponent } from './send-idea-page.component';

@NgModule({
  declarations: [
    SendIdeaPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SendIdeaPageRoutingModule,
    AlertModalModule.forRoot()
  ]
})
export class SendIdeaPageModule { }
