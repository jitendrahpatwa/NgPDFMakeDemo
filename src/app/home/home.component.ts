import { Component, OnInit } from '@angular/core';

// home service
import { HomeService } from './services/home.service';

// pdfmake instances
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  docDefinition: any;

  constructor(
  	public homeserv: HomeService
  ) { }

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

  print() {
    pdfMake.createPdf(this.docDefinition).print();
  }

  downloadDemo() {
  	this.homeserv.makepdfSimple();
  }

  downloadTable() {
  	this.homeserv.fortable();
  }

}
