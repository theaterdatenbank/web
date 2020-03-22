import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Event} from "./Event";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: "app-einzelnes-event",
  templateUrl: "./einzelnes-event.component.html",
  styleUrls: ["./einzelnes-event.component.css"]
})
export class EinzelnesEventComponent implements OnInit {

  @Input()
  public dasEvent: Event;
  public isInfoMooreHidden: boolean;

  @Output()
  public checkedEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
 this.isInfoMooreHidden = true;
  }

  public get day(){
    const date: Date = new Date(this.dasEvent.eventDate);
    return date.getUTCDate() + 1;
  }

  public get month(){
    const date: Date = new Date(this.dasEvent.eventDate);
    const months: string[] = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    return months[date.getUTCMonth()];
  }

  public get year(){
    const date: Date = new Date(this.dasEvent.eventDate);
    return date.getUTCFullYear();
  }

  public get bildLink() {
    return this.dasEvent.thumbnail || "TODO: Default bild";
  }



  ngOnInit(): void {
  }

  checkboxChanged($event: MatCheckboxChange) {
        this.checkedEvent.emit($event.source.value)
  }
}
