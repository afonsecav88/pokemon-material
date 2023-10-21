import { Injectable, inject } from '@angular/core';
import { apiUrl } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public apiUrl = apiUrl;
  public http = inject(HttpClient);

  constructor() {}

  getPokemon(pokemonName: string) {
    const url: string = `${this.apiUrl}/${pokemonName}`;
    this.http.get(url).subscribe((data) => {
      console.log('Desde el servicio', data);
    });
  }
}
