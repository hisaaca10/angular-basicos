import {Injectable} from "@angular/core";


@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
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

  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje): void{
    this._personajes.push(personaje);
  }

}
