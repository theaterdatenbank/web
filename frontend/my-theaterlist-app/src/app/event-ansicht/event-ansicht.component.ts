import {Component, OnInit} from "@angular/core";
import {Observable, of} from "rxjs";
import {Event} from "../einzelnes-event/Event";
import {Organiser} from "../einzelnes-event/Organiser";

@Component({
  selector: "app-event-ansicht",
  templateUrl: "./event-ansicht.component.html",
  styleUrls: ["./event-ansicht.component.css"]
})
export class EventAnsichtComponent implements OnInit {

  public alleEvents: Event[];

  constructor() {
    this.alleEvents = [
      new Event(Date.now(), "AIDA", "Die Beschreibung von Aida", "Der Volltext", new Organiser("Ein Veranstalter"), undefined, "https://my.stream"),
      new Event(Date.now(), "Hamlet", "Sein oder nicht sein", "Der Volltext von Hamlet", new Organiser("Ein anderer Veranstalter"), undefined, "https://my.other.stream"),
      new Event(Date.now(), "Event3", "Das Event", "Was soll ich hier schon groß schreiben?", new Organiser("Nochmal wer anders"), undefined, "https://the.event.stream")
    ];
  }

  ngOnInit(): void {
  }

  public updateAlleEvents($event: Event[]) {
    this.alleEvents = $event;
  }
}
