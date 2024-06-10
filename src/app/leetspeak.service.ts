import { Injectable } from '@angular/core';

/**
 * Diese Service-Klasse wurde mit dem folgenden Befehl erzeugt:
 * ```
 * ng generate service leetspeak
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class LeetspeakService {

  public ubersetzteNachLeetspeak( eingabeText: string ): string {

    return eingabeText.replace( /a/gi , "4" )
                      .replace( /b/gi , "8" )
                      .replace( /e/gi , "3" )
                      .replace( /g/gi , "9" )
                      .replace( /i/gi , "1" )
                      .replace( /l/gi , "1" ) // auch "i" wird schon auf Ziffer "1" abgebildet
                      .replace( /o/gi , "0" )
                      .replace( /s/gi , "5" )
                      .replace( /z/gi , "2" );
  }

}
