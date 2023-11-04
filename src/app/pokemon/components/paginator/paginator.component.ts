import { Component, Output, inject, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Output() eventPaginator = new EventEmitter<PageEvent>();

  private pokemonService = inject(PokemonService);

  constructor() {}

  length = this.pokemonService.pokemon.length;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.eventPaginator.emit(e);
    this.pageEvent = e;
    console.log('Este es el evento: ', e);
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
