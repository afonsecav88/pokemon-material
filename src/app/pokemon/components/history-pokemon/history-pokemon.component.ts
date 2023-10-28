import { Component, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../intefaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-history-pokemon',
  templateUrl: './history-pokemon.component.html',
  styleUrls: ['./history-pokemon.component.css'],
})
export class HistoryPokemonComponent implements OnInit {
  public historySearchPokemons!: Pokemon[];
  private pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.historySearchPokemons = this.pokemonService.pokemon;
  }

  searchPokemon() {
    console.log('has buscado un pokemon');
  }
}
