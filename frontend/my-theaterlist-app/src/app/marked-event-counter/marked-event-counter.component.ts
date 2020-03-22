import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-marked-event-counter',
  templateUrl: './marked-event-counter.component.html',
  styleUrls: ['./marked-event-counter.component.css']
})
export class MarkedEventCounterComponent implements OnInit {

  @Input("count")
  public count: number;

  @Output("showSelectedEvents")
  public showSelectedEvents: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
    this.count = 0;
  }

  getSelectedEvents() {
    this.showSelectedEvents.emit("show")
  }
}
