import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAnsichtComponent } from './event-ansicht.component';

describe('EventAnsichtComponent', () => {
  let component: EventAnsichtComponent;
  let fixture: ComponentFixture<EventAnsichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAnsichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAnsichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
