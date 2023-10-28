import { Injectable, inject } from '@angular/core';
import { apiUrl } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../intefaces/pokemon.interface';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public router = inject(Router);
  public http = inject(HttpClient);
  public apiUrl = apiUrl;
  public pokemons: Pokemon[] = [];

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

  private getLocalStorage() {
    if (!localStorage.getItem('pokemons')) return;
    return (this.pokemons = JSON.parse(localStorage.getItem('pokemons')!));
  }

  private isPokemonFounded(pokemonName: string): boolean {
    const pokemonFounded = this.pokemons.filter((x) => x.name === pokemonName);
    return pokemonFounded.length !== 0 ? true : false;
  }

  private navigateAfterSearch() {
    this.router
      .navigateByUrl('/pokemon/pokemon/list', { skipLocationChange: false })
      .then(() => {
        this.router.navigate(['list']);
      });
  }

  getPokemon(pokemonName: string): Observable<any> {
    const searchPokemon = pokemonName.trim().toLowerCase();
    if (this.isPokemonFounded(searchPokemon))
      return of(console.log('ya esta el pokemon'));
    const url: string = `${this.apiUrl}/${searchPokemon}`;
    return this.http.get<Pokemon>(url).pipe(
      map((resp: Pokemon) => {
        this.pokemons.unshift(resp), this.updateLocalStorage(this.pokemons);
        this.navigateAfterSearch();
      })
    );
  }
}
