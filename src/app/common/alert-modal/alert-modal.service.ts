import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { AlertModalComponent } from '@kadk-common/alert-modal/alert-modal.component';

@Injectable()
export class AlertModalService {

  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  openAlert(message?: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.message = message;
    return this.modalService.onHide;
  }
}
