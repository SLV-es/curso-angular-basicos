import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] ;
  borrados: string[] = [];

  constructor() {
    console.log('constructor');
      this.heroes=[];
      this.undoHeroes();
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  undoHeroes() {
    this.heroes = ['Spiderman', 'Ironman', 
    'Hulk', 'Thor', 'Capitán América'];
    this.borrados=[];
  }

  borrarHeroes( queBorro: number): void {
    console.log('borrarHeroes')
    let borrado: string = '';
    switch ( queBorro ) {
    case  1:
      borrado = this.heroes.shift() || '';
      if (borrado > '') this.borrados.unshift( borrado );
      break;
    case -1:
      borrado = this.heroes.pop() || '';
      if (borrado > '') this.borrados.unshift( borrado );
      break;
    default:
      for (var x of this.heroes) {
        this.borrados.unshift( x );
      }
      this.heroes = [];
      break;
    }
    console.log(this.heroes);
  }
}
