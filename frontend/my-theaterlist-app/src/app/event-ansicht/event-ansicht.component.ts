import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Event} from "../einzelnes-event/Event";

@Component({
  selector: 'app-event-ansicht',
  templateUrl: './event-ansicht.component.html',
  styleUrls: ['./event-ansicht.component.css']
})
export class EventAnsichtComponent implements OnInit {

  public alleEvents: Observable<Event[]>;

  constructor() {
    this.alleEvents = of([
      new Event("AIDA", "Die Beschreibung von Aida", undefined),
      new Event("Hamlet", "Sein oder nicht sein", undefined),
      new Event("Event3", "Das EVent", undefined)
    ])
  }

  ngOnInit(): void {
  }

}
