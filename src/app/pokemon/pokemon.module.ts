import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchPokemonComponent,
    PokemonDetailsComponent,
    PokemonListComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
