import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NotificationsService } from '../../services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
})
export class SearchPokemonComponent {
  public servicePokemon = inject(PokemonService);
  private notificationsService = inject(NotificationsService);

  @ViewChild('search')
  public search!: ElementRef<HTMLInputElement>;

  searchPokemon(): void {
    const searchPokemon = this.search.nativeElement.value.trim().toLowerCase();
    if (!searchPokemon) return;
    if (this.servicePokemon.isPokemonFounded(searchPokemon)) {
      this.notificationsService.error(`Ya buscaste este Pokemon`);
      return;
    }
    this.servicePokemon.getPokemon(searchPokemon).subscribe({
      next: () => {
        this.notificationsService.success(`El pokemon ha sido encontrado`);
        this.search.nativeElement.value = '';
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404)
          this.notificationsService.error(`El pokemon no ha sido encontrado`);
        else
          this.notificationsService.error(
            `Ha ocurrido un error en la busqueda`
          );
      },
    });
  }
}
