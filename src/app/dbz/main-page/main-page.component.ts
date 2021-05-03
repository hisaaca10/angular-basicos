import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 150000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    },
    {
      nombre: 'Trunks',
      poder: 40000
    },
  ];

  agregarNuevoPersonaje(personaje){
    this.personajes.push(personaje);
  }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

}
