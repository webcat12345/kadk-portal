import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendIdeaPageComponent } from './send-idea-page.component';

describe('SendIdeaPageComponent', () => {
  let component: SendIdeaPageComponent;
  let fixture: ComponentFixture<SendIdeaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendIdeaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendIdeaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
