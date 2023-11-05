import { Component, inject } from '@angular/core';
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
  public pokemonsPaginator: Pokemon[] = [];

  constructor() {
    this.pokemonService.firstTenPokemon.subscribe((pokemon: Pokemon[]) => {
      this.pokemonsPaginator = pokemon;
    });
  }

  getPageInfoPaginator(event: PageEvent) {
    return (this.pokemonsPaginator = this.pokemonService.nextTenPokemon(
      event.pageIndex,
      event.pageSize
    ));
  }
}
