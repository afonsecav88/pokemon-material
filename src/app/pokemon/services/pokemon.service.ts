import { Injectable, effect, inject, signal, computed } from '@angular/core';
import { apiUrl } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../intefaces/pokemon.interface';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private apiUrl = apiUrl;

  private pokemons: Pokemon[] = [];
  private tenPokemon: Pokemon[] = [];

  constructor() {
    this.getLocalStorage();
    this.catchFirstTenPokemons();
  }

  public get pokemon(): Pokemon[] {
    return [...this.pokemons];
  }

  public get firstTenPokemon() {
    return this.tenPokemon;
  }

  private catchFirstTenPokemons() {
    this.tenPokemon = this.pokemons.slice(0, 10);
    return this.tenPokemon;
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
      .navigateByUrl('/pokemon/pokemon/list', { skipLocationChange: true })
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
      tap((resp: Pokemon) => {
        this.pokemons.unshift(resp), this.updateLocalStorage(this.pokemons);
        this.catchFirstTenPokemons();
        this.navigateAfterSearch();
      })
    );
  }
}
