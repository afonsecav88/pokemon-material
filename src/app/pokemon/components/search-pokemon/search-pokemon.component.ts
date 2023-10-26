import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
})
export class SearchPokemonComponent {
  public servicePokemon = inject(PokemonService);

  @ViewChild('search')
  public search!: ElementRef<HTMLInputElement>;

  searchPokemon(): void {
    if (!this.search.nativeElement.value) return;
    this.servicePokemon.getPokemon(this.search.nativeElement.value).subscribe();
    this.search.nativeElement.value = '';
  }
}
