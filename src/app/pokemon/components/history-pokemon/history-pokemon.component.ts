import { Component } from '@angular/core';

@Component({
  selector: 'app-history-pokemon',
  templateUrl: './history-pokemon.component.html',
  styleUrls: ['./history-pokemon.component.css'],
})
export class HistoryPokemonComponent {
  public historySearch: string[] = ['hola'];

  searchPokemon() {
    console.log('has buscado un pokemon');
  }
}
