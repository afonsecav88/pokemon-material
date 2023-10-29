import { Component, effect, inject, signal } from '@angular/core';
import { Pokemon } from '../../intefaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-history-pokemon',
  templateUrl: './history-pokemon.component.html',
  styleUrls: ['./history-pokemon.component.css'],
})
export class HistoryPokemonComponent {
  public historySearchPokemons = signal<Pokemon[]>([]);
  private pokemonService = inject(PokemonService);

  constructor() {
    this.historySearchPokemons.update(() => this.pokemonService.pokemon);
    effect(() => this.historySearchPokemons());
  }

  searchPokemon() {
    console.log('Has visto el detalle de un pokemon');
  }
}
