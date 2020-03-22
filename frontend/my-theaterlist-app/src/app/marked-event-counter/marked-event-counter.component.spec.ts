import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MarkedEventCounterComponent} from './marked-event-counter.component';

describe('MarkedEventCounterComponent', () => {
  let component: MarkedEventCounterComponent;
  let fixture: ComponentFixture<MarkedEventCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkedEventCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkedEventCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
