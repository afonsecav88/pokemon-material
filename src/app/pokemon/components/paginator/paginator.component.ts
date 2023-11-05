import {
  Component,
  EventEmitter,
  inject,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  private pokemonService = inject(PokemonService);
  @Output() pageInfoPaginator = new EventEmitter<any>();

  contructor() {}

  pageSize = 10;
  pageIndex = 1;
  totalItems = this.pokemonService.pokemon.length;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.pageInfoPaginator.emit({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    });
  }
}
