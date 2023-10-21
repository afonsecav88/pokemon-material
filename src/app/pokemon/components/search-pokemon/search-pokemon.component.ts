import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
})
export class SearchPokemonComponent {
  @ViewChild('search')
  public search!: ElementRef<HTMLInputElement>;

  searchPokemon() {
    if (!this.search.nativeElement.value) return;
    console.log('tiene valor el input');
    this.search.nativeElement.value = '';
  }
}
