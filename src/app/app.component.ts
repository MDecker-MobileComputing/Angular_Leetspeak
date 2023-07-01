import { Component } from '@angular/core';

@Component({
  selector: 'mide-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

    this.ausgabeText = this.eingabeText.trim();
  }

  /**
   * Event-Handler-Methode für Button "Eingabefeld löschen".
   */
  public onLoeschenButton() {

    console.log("Lösch-Button gedrückt.");
    this.eingabeText = "";
  }

}
