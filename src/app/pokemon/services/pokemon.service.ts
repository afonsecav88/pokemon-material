import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { apiUrl } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../intefaces/pokemon.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons = signal<Pokemon[]>([
    {
      base_experience: 0,
      height: 0,
      id: 0,
      name: '',
      order: 0,
      sprites: {
        front_default: '',
      },
      weight: 0,
    },
  ]);

  public apiUrl = apiUrl;
  public http = inject(HttpClient);
  public router = inject(Router);

  public get pokemon(): WritableSignal<Pokemon[]> {
    return this.pokemons;
  }

  private updateLocalStorage(pokemon: Pokemon[]) {
    localStorage.setItem('pokemons', JSON.stringify(pokemon));
  }

  // private redirectToListPokemonView() {
  //   return this.router.url;
  // }

  private getLocalStorage() {
    if (!localStorage.getItem('pokemons')) return;
    return (this.pokemons = JSON.parse(localStorage.getItem('pokemons')!));
  }

  getPokemon(pokemonName: string) {
    const url: string = `${this.apiUrl}/${pokemonName}`;
    this.http.get<Pokemon[]>(url).subscribe({
      next: (pokemon: Pokemon[]) => {
        this.pokemons.mutate((current) => {
          current.push(pokemon[0]);
          console.log(this.pokemons());
        });
        this.updateLocalStorage(pokemon);
        // console.log(this.redirectToListPokemonView());
      },
      error: (error) => {
        {
          console.log('Ha ocurrido un error', error);
        }
      },
    });
  }
}
