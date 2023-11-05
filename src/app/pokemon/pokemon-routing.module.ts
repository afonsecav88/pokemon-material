import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { NotFoundPageComponent } from '../shared/pages/not-found-page/not-found-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'list', component: ListPageComponent },
      { path: 'pokemon/:id', component: PokemonDetailsComponent },
      {
        path: 'pageNotFound',
        component: NotFoundPageComponent,
      },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
