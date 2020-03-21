import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelnesEventComponent } from './einzelnes-event.component';

describe('EinzelnesEventComponent', () => {
  let component: EinzelnesEventComponent;
  let fixture: ComponentFixture<EinzelnesEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinzelnesEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinzelnesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
