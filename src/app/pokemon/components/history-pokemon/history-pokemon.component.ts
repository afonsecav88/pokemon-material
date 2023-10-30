import { Component, inject } from '@angular/core';
import { Pokemon } from '../../intefaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-history-pokemon',
  templateUrl: './history-pokemon.component.html',
  styleUrls: ['./history-pokemon.component.css'],
})
export class HistoryPokemonComponent {
  private pokemonService = inject(PokemonService);
  private notificationService = inject(NotificationsService);
  public historySearchPokemons: Pokemon[] = [];

  constructor() {
    this.pokemonService.firstTenPokemon.subscribe((pokemon: Pokemon[]) => {
      console.log(pokemon);
      this.historySearchPokemons = pokemon;
    });
  }

  searchPokemon() {
    this.notificationService.error('Se inserto correctamente');
  }
}
