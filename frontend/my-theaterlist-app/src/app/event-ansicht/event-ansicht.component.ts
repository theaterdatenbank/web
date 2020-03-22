import {Component, OnInit, Output} from '@angular/core';
import {Event} from '../einzelnes-event/Event';
import {Organiser} from '../einzelnes-event/Organiser';
import {TimeSpan} from '../einzelnes-event/TimeSpan';

@Component({
  selector: 'app-event-ansicht',
  templateUrl: './event-ansicht.component.html',
  styleUrls: ['./event-ansicht.component.css']
})
export class EventAnsichtComponent implements OnInit {

  public alleEvents: Event[];
  private checkedEvents: Event[] = [];
  private savedEvents: Event[] = [];

  @Output()
  public eventCounter: number;

  constructor() {
    this.alleEvents = [
      new Event('2020-05-01T22:50:00Z', 'AIDA', 'Die Beschreibung von Aida',
        // tslint:disable-next-line:max-line-length
        'Der Volltext', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        new Organiser('Ein Veranstalter'), new TimeSpan(90), undefined,
        'https://my.stream', true,
        '2020-01-01T22:00:00Z', '2021-05-01T22:00:00Z'),
      new Event('2020-05-14T22:00:00Z', 'Hamlet', 'Sein oder nicht sein',
        // tslint:disable-next-line:max-line-length
        'Der Volltext von Hamlet', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        new Organiser('Ein anderer Veranstalter'), new TimeSpan(65), undefined,
        'https://my.other.stream', false,
        '2020-05-01T22:00:00Z', '2020-05-02T22:00:00Z'),
      new Event('2020-06-13T22:00:00Z', 'Event3', 'Das Event',
        // tslint:disable-next-line:max-line-length
        'Was soll ich hier schon groß schreiben?', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        new Organiser('Nochmal wer anders'),
        new TimeSpan(67), undefined, 'https://the.event.stream',
        true, '2020-03-01T22:00:00Z', '2020-05-01T22:00:00Z')
    ];
  }

  ngOnInit(): void {
  }

  public updateAlleEvents($event: Event[]) {
    if (this.savedEvents.length < this.alleEvents.length) {
      this.savedEvents = this.alleEvents;
    }
    this.alleEvents = $event;
  }

  checkProvider($event: string) {
    let event = this.alleEvents.filter(evt => evt.eventName == $event)[0];

    if (this.checkedEvents.indexOf(event) >= 0) {
      this.checkedEvents = this.checkedEvents.filter(ce => ce.eventName != event.eventName)
      this.eventCounter = this.checkedEvents.length;
    } else {
      this.eventCounter = this.checkedEvents.push(event);
    }
  }

  showFavEvents($event: any) {
    if ($event == "show") {
      if (this.checkedEvents.length == 0) {
        this.updateAlleEvents(this.savedEvents);
      } else if (this.checkedEvents.length == this.alleEvents.length) {
        this.updateAlleEvents(this.savedEvents);
      } else {
          this.updateAlleEvents(this.checkedEvents);
      }

    }
  }
}
