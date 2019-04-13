import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseIdeasPageComponent } from './browse-ideas-page.component';

describe('BrowseIdeasPageComponent', () => {
  let component: BrowseIdeasPageComponent;
  let fixture: ComponentFixture<BrowseIdeasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseIdeasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseIdeasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
