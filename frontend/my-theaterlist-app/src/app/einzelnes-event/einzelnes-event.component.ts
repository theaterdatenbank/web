import {Component, Input, OnInit} from '@angular/core';
import {Event} from './Event';

@Component({
  selector: 'app-einzelnes-event',
  templateUrl: './einzelnes-event.component.html',
  styleUrls: ['./einzelnes-event.component.css']
})
export class EinzelnesEventComponent implements OnInit {

  @Input()
  public dasEvent: Event;

  constructor() { this.isInfoMooreHidden=true;}

<<<<<<< HEAD
public isInfoMooreHidden : boolean;

public get bildLink() {
    return this.dasEvent.thumbnail || "TODO: Default bild";
=======
  public get bildLink() {
    return this.dasEvent.thumbnail || 'TODO: Default bild';
>>>>>>> 5566ea809e31c96f719e2de879b77c80ca577ec5
  }

  ngOnInit(): void {
  }

}

