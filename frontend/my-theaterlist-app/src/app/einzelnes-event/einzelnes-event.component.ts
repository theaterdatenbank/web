import {Component, Input, OnInit} from "@angular/core";
import {Event} from "./Event";

@Component({
  selector: "app-einzelnes-event",
  templateUrl: "./einzelnes-event.component.html",
  styleUrls: ["./einzelnes-event.component.css"]
})
export class EinzelnesEventComponent implements OnInit {

  @Input()
  public dasEvent: Event;
  public isInfoMooreHidden: boolean;

  constructor() {
    this.isInfoMooreHidden = true;
  }

  public get bildLink() {
    return this.dasEvent.thumbnail || "TODO: Default bild";
  }

  ngOnInit(): void {
  }

}

