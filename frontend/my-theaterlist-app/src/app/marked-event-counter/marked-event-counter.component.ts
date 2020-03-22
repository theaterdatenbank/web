import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-marked-event-counter',
  templateUrl: './marked-event-counter.component.html',
  styleUrls: ['./marked-event-counter.component.css']
})
export class MarkedEventCounterComponent implements OnInit {

  @Input("count")
  public count: number;
  constructor() {
  }

  ngOnInit(): void {
    this.count = 0;
  }

}
