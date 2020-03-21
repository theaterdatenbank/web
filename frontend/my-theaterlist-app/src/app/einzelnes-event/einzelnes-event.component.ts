import {Component, Input, OnInit} from "@angular/core";
import {Event} from "./Event";

@Component({
  selector: 'app-einzelnes-event',
  templateUrl: './einzelnes-event.component.html',
  styleUrls: ['./einzelnes-event.component.css']
})
export class EinzelnesEventComponent implements OnInit {

  @Input("dasEvent")
  public dasEvent: Event;

  constructor() { }

  public get bildLink() {
    return this.dasEvent.thumbnail || "TODO: Default bild";
  }

  ngOnInit(): void {
  }

}
