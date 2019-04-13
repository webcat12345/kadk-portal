import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from './alert-modal.component';
import { AlertModalService } from '@kadk-common/alert-modal/alert-modal.service';

@NgModule({
  declarations: [
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    AlertModalComponent
  ],
  providers: [
    AlertModalService
  ]
})
export class AlertModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertModalModule,
      providers: [ AlertModalService ]
    };
  }
}
