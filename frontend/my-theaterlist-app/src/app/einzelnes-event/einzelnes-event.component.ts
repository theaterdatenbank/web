import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from './Event';
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-einzelnes-event',
  templateUrl: './einzelnes-event.component.html',
  styleUrls: ['./einzelnes-event.component.css']
})
export class EinzelnesEventComponent implements OnInit {

  @Input()
  public dasEvent: Event;

  @Output("checkedEvent")
  public checkedEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  public get bildLink() {
    return this.dasEvent.thumbnail || 'TODO: Default bild';
  }

  ngOnInit(): void {
  }

  checkboxChanged($event: MatCheckboxChange) {
        this.checkedEvent.emit($event.source.value)
  }
}
