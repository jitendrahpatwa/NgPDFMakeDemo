import { Component, OnInit } from '@angular/core';
// pdfmake instances
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  docDefinition: any;

  constructor() { }

  ngOnInit() {
  	this.initDoc();
  }

  initDoc() {
    this.docDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  }

  makepdfto($event) {
    console.log($event, pdfMake, pdfFonts);
  }

  download() {
    pdfMake.createPdf(this.docDefinition).download();
  }

  open() {
    pdfMake.createPdf(this.docDefinition).open();
  }

}
