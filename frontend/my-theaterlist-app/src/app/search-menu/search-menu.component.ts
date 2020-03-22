import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ajaxGet} from 'rxjs/internal-compatibility';
import {map, take} from 'rxjs/operators';
import {Genre} from './Genre';
import {Event} from '../einzelnes-event/Event';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit, OnDestroy {

  @Output()
  public gefundeneEvents: EventEmitter<Event[]> = new EventEmitter<Event[]>();

  @Input("count")
  count: number;
  public willIchValue: string;
  public willIchNichtValue: string;

  constructor() {
  }

  ngOnInit(): void {
    this.willIchValue = '';
    this.willIchNichtValue = '';
    this.sucheAlles();

  }

  public suggestForInput(input: string): Observable<string[]> {
    return ajaxGet('http://florianscholz.net:5000/api/ajax/genres')
      .pipe(
        take(1),
        map(response => response.response as Genre[]),
        map(genres => genres.map(genre => genre.description)
          .filter(description => description.startsWith(input))),
      );
  }

  public ngOnDestroy(): void {
  }

  public sucheAlles() {
    ajaxGet(`http://florianscholz.net:5000/api/ajax/events_filtered?wanted=${this.willIchValue}&notwanted=${this.willIchNichtValue}`)
      .pipe(
        take(1),
        map(result => result.response as Event[])
      )
      .subscribe(events => this.gefundeneEvents.emit(events));
  }
}
