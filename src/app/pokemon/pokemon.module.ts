import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchPokemonComponent,
    PokemonDetailsComponent,
    PokemonListComponent,
    PokemonComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule, SharedModule, MaterialModule],
})
export class PokemonModule {}
