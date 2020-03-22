import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {SearchMenuComponent} from './search-menu/search-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {EventAnsichtComponent} from './event-ansicht/event-ansicht.component';
import {EinzelnesEventComponent} from './einzelnes-event/einzelnes-event.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MarkedEventCounterComponent} from './marked-event-counter/marked-event-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMenuComponent,
    AutoCompleteComponent,
    EventAnsichtComponent,
    EinzelnesEventComponent,
    MarkedEventCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
