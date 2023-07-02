import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClipboardModule // für Kopieren von Übersetzungsergebnis in Zwischenablage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
