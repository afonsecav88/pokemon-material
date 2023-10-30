import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../intefaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  public servicePokemon = inject(PokemonService);
  public pokemons = signal<Pokemon[]>([]);

  constructor() {
    this.pokemons.update(() => this.servicePokemon.pokemon);
  }
}
