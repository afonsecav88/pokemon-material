import { Injectable, inject } from '@angular/core';
import { apiUrl } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../intefaces/pokemon.interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private apiUrl = apiUrl;

  private pokemons: Pokemon[] = [];
  private tenPokemon$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<
    Pokemon[]
  >([]);

  constructor() {
    this.getLocalStorage();
    this.catchFirstTenPokemons(this.pokemons);
  }

  private catchFirstTenPokemons(pokemons: Pokemon[]) {
    let firstTenPokemon = pokemons.slice(0, 10);
    this.tenPokemon$.next(firstTenPokemon);
  }

  private updateLocalStorage(pokemon: Pokemon[]) {
    localStorage.setItem('pokemons', JSON.stringify(pokemon));
  }

  private getLocalStorage() {
    if (!localStorage.getItem('pokemons')) return;
    return (this.pokemons = JSON.parse(localStorage.getItem('pokemons')!));
  }

  private navigateAfterSearch() {
    this.router
      .navigateByUrl('/pokemon/pokemon/list', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['list']);
      });
  }

  public get pokemon(): Pokemon[] {
    return [...this.pokemons];
  }

  public get firstTenPokemon(): Observable<Pokemon[]> {
    console.log();
    return this.tenPokemon$.asObservable();
  }

  public isPokemonFounded(pokemonName: string): boolean {
    const pokemonFounded = this.pokemons.filter((x) => x.name === pokemonName);
    return pokemonFounded.length !== 0 ? true : false;
  }

  nextTenPokemon(page: number, pageSize: number): Pokemon[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = this.pokemons.slice(startIndex, endIndex);
    console.log(this.pokemons);
    return paginatedData;
  }

  public getPokemon(pokemonName: string): Observable<Pokemon> {
    const url: string = `${this.apiUrl}/${pokemonName}`;
    return this.http.get<Pokemon>(url).pipe(
      tap((resp: Pokemon) => {
        this.pokemons.unshift(resp), this.updateLocalStorage(this.pokemons);
        this.catchFirstTenPokemons(this.pokemons);
        this.navigateAfterSearch();
      })
    );
  }

  public getPokemonById(id: number): Pokemon[] {
    return this.pokemons.filter((x) => x.id == id);
  }
}
