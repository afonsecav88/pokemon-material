import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../intefaces/pokemon.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  public pokemonService = inject(PokemonService);
  public pokemons = signal<Pokemon[]>([]);
  public pokemonsPaginator: Pokemon[] = [];

  constructor() {
    this.pokemonService.firstTenPokemon.subscribe((pokemon: Pokemon[]) => {
      this.pokemons.update(() => pokemon);
    });
    this.pokemonsPaginator = this.pokemonService.pokemon;
  }

  nextTenPokemon(event: PageEvent) {
    // if (this.pokemonsPaginator.length !== 0) {
    //   this.pokemonsPaginator == this.pokemons();
    // }
    this.pokemonsPaginator = this.pokemonService.nextTenPokemon(event);
  }
}
