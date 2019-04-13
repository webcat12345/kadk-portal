import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertModalService } from '@kadk-common/alert-modal/alert-modal.service';

@Component({
  selector: 'kadk-send-idea-page',
  templateUrl: './send-idea-page.component.html',
  styleUrls: ['./send-idea-page.component.scss']
})
export class SendIdeaPageComponent implements OnInit {

  form: FormGroup = this.fb.group({
    topic: ['', Validators.required],
    idea: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit() {
  }

  send() {
    const message = `<p>Your idea has been received<br><p>Thank you!</p></p>`
    this.alertModalService.openAlert(message).subscribe(res => {
      this.form.reset();
    });
  }

}
