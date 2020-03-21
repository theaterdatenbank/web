import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit, OnDestroy {
  @Input()
  public label: string;

  @Input()
  public mappingFunction: (input: string) => Observable<string[]>;

  @Input()
  public placeholder: string;

  @Output()
  public enterPressed: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public value: EventEmitter<string> = new EventEmitter<string>();

  public formControl = new FormControl();
  public options$: Observable<string[]> = of();
  private destroySubject = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {
    this.options$ = this.formControl.valueChanges
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
        switchMap(this.mappingFunction)
      );

    // ValueChange
    this.formControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroySubject)
      ).subscribe(
      value => this.value.emit(value)
    );
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  public onEnter(value: string) {
    this.enterPressed.emit(value);
  }
}
