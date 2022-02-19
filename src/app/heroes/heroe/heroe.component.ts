import { Component } from "@angular/core";




@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 45;
    obtenerNombre(): string {
        
        return `El nombre y edad del super héroe es: 
        ${ this.nombre }, de ${ this.edad } años`;
    }

    get nombreUCase(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        if (this.nombre=='Ironman') 
            {this.nombre='Spiderman';} 
        else 
            {this.nombre='Ironman';}
    }

    cambiarEdad(): void {
        if (this.edad>=50)
            this.edad=30
        else
            this.edad+=1
    }

}