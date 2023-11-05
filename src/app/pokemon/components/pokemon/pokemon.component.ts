import { Component, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);
  public pokemon!: Pokemon[];

  private id!: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('Este es el Id', this.id);
      this.pokemon = this.pokemonService.getPokemonById(this.id);
      console.log(this.pokemon);
    });
  }
}
