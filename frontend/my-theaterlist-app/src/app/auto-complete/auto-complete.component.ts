import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: "app-auto-complete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.css"]
})
export class AutoCompleteComponent implements OnInit, OnDestroy {
  @Input("label")
  public label: string;

  @Input("mappingFunction")
  public mappingFunction: (string) => Observable<string[]>;

  @Input("placeholder")
  public placeholder: string;
  public formControl = new FormControl();
  public options$: Observable<string[]> = of();

  constructor() {
  }

  ngOnInit(): void {
    this.options$ = this.formControl.valueChanges
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
        switchMap(this.mappingFunction)
      );
  }

  ngOnDestroy(): void {
  }

}
