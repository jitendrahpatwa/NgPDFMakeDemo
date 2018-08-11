# Ngpdfdemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## pre-command for node modules installation
>npm install --save

## pdfmake installation
From pdfmake [github source](https://github.com/bpampuch/pdfmake) install pdfmake using following command
>npm i --save pdfmake
```
If node modules shows error for fs install fs by
npm i --save fs
```

### initialization of pdfmake instance and declaration in home component
```
// pdfmake instance
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
```
