import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable, of} from "rxjs";

@Component({
  selector: "app-search-menu",
  templateUrl: "./search-menu.component.html",
  styleUrls: ["./search-menu.component.css"]
})
export class SearchMenuComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
  }

  public suggestForInput(input: string): Observable<string[]> {
    return of([input + "1", input + "2"]);
  }

  public ngOnDestroy(): void {
  }

}
