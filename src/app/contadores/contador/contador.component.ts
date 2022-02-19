import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent{
    
    ctitle   : string = 'Proyecto 01 Bases';
    csubtitle: string = "Contador App";
    nContador: number = 10;
    nBase    : number = 5;
    nLimSup  : number = 100;
    nLimInf  : number = 0;
  
    nSumar(
      nCuanto: number
      ) {
      this.nContador+=nCuanto;
      if (this.nContador<this.nLimInf) this.nContador=this.nLimInf;
      if (this.nContador>this.nLimSup) this.nContador=this.nLimSup;
   
    };
}