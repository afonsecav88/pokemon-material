import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'pokemon', component: HomePageComponent },
      { path: 'pokemon/:id', component: PokemonDetailsComponent },
      { path: 'listado', component: PokemonListComponent },
      { path: '**', redirectTo: 'pokemon' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
