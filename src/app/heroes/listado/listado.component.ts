import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman',
    'Hulk',
    'Goku',
    'Capitan America',
    'Thor'];

  heroesborrados: string[] = [];

  borrarHeroe(){
    this.heroesborrados.push(this.heroes.shift());
  }


}
