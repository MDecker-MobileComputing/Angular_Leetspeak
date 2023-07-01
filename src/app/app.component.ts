import { Component } from '@angular/core';
import { LeetspeakService } from './leetspeak.service';

@Component({
  selector: 'mide-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Konstruktor für Dependency-Injection.
   */
  constructor(private leetspeakService: LeetspeakService) {}

  /**
   * Diese Member-Variable ist mit einem Two-Way-Binding an das <textarea>-Element
   * für die Eingabe des zu übersetzenden Textes gebunden.
   */
  public eingabeText = "";

    /**
   * Diese Member-Variable ist mit einem Two-Way-Binding an das <textarea>-Element
   * für die Ausgabe des zu übersetzten Textes gebunden.
   */
  public ausgabeText = "";

  /**
   * Event-Handler-Methode für Button "Nach Leetspeek übersetzen".
   */
  public onUebersetzenButton() {

    const eingabeTrimmed = this.eingabeText.trim();

    this.ausgabeText = this.leetspeakService.ubersetzteNachLeetspeak(eingabeTrimmed);
  }

  /**
   * Event-Handler-Methode für Button "Eingabefeld löschen".
   */
  public onLoeschenButton() {

    console.log("Lösch-Button gedrückt.");
    this.eingabeText = "";
  }

}
