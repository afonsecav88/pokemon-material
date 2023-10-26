import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { apiUrl } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../intefaces/pokemon.interface';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public router = inject(Router);

  constructor() {
    const storage = this.getLocalStorage();
    console.log('obteniendo del Storage', storage);
  }

  public get pokemon(): Pokemon[] {
    return [...this.pokemons];
  }

  private updateLocalStorage(pokemon: Pokemon[]) {
    localStorage.setItem('pokemons', JSON.stringify(pokemon));
  }

  // private redirectToListPokemonView() {
  //   return this.router.navigateByUrl('/pokemon');
  // }

  public apiUrl = apiUrl;
  public http = inject(HttpClient);
  // public pokemons = signal<Pokemon[]>([]);
  public pokemons: Pokemon[] = [];

  private getLocalStorage() {
    if (!localStorage.getItem('pokemons')) return;
    return (this.pokemons = JSON.parse(localStorage.getItem('pokemons')!));
  }

  getPokemon(pokemonName: string): Observable<void> {
    const searchPokemon = pokemonName.trim().toLowerCase();
    const url: string = `${this.apiUrl}/${searchPokemon}`;
    return this.http.get<Pokemon>(url).pipe(
      map((resp: Pokemon) => {
        this.pokemons.push(resp), this.updateLocalStorage(this.pokemons);
        // this.redirectToListPokemonView();
      })
    );
  }
}
