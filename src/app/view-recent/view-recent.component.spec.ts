import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecentComponent } from './view-recent.component';

describe('ViewRecentComponent', () => {
  let component: ViewRecentComponent;
  let fixture: ComponentFixture<ViewRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
