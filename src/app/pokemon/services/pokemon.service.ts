import { Injectable, inject, signal } from '@angular/core';
import { apiUrl } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../intefaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons = signal<Pokemon[]>([]);
  public apiUrl = apiUrl;
  public http = inject(HttpClient);

  constructor() {}

  getPokemon(pokemonName: string) {
    const url: string = `${this.apiUrl}/${pokemonName}`;
    this.http.get<Pokemon[]>(url).subscribe({
      next: (pokemon: Pokemon[]) => {
        this.pokemons.set(pokemon);
        console.log(pokemon);
      },
      error: (error) => {
        {
          console.log('Ha ocurrido un error', error);
        }
      },
    });
  }
}
