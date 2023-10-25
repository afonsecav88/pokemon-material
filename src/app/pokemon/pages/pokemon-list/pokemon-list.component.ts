import {
  Component,
  inject,
  Input,
  OnInit,
  WritableSignal,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../intefaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  public servicePokemon = inject(PokemonService);
  public pokemons!: WritableSignal<Pokemon[]>;

  constructor() {}

  ngOnInit(): void {
    this.pokemons = this.servicePokemon.pokemon;
    console.log('Desde Listado', this.pokemons());
  }
}
