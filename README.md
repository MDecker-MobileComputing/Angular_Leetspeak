# Angular-App: LeetSpeak-Übersetzer #

<br>

This repository contains a simple [Angular](https://angular.io/) app that translate text input to [Leetspeak](https://en.wikipedia.org/wiki/Leet).



<br>

**Example:**
* Eingabe: *"Falsches Üben von Xylophonmusik quält jeden größeren Zwerg."*
* Ausgabe: *"F415ch35 Ü83n v0n Xy10ph0nmu51k quä1t j3d3n 9röß3r3n 2w3r9."*

<br>

----

## App served by GitHub Pages ##

<br>

Access the app via [GitHub Pages](https://pages.github.com/):
https://mdecker-mobilecomputing.github.io/Angular_Leetspeak/

<br>

The app was generated for serving by *GitHub Pages* with the following command:
```
ng build --configuration production --base-href /Angular_Leetspeak/
```

You can also use the following script defined in `package.json`:
```
npm run build:pages
```

The `build:pages` script also copies `docs/index.html` to `docs/404.html` so that direct URL calls work with Angular routing on GitHub Pages.

<br>

GitHub Pages settings for this repository:
* Source: *Deploy from a branch*
* Branch: *main*
* Folder: */docs*

<br>

----

## Commands ##

<br>

This project was created with the following CLI command:
```
ng new LeetSpeak --skip-tests --prefix=mide
```

<br>

Check the syntax of the project:
```
ng lint
```

<br>

Test the app in the browser:
```
ng serve
```

You can also use the following script defined in `package.json`:
```
npm start
```

<br>

----

## License ##

<br>

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License) for the files in this repository.

<br>
