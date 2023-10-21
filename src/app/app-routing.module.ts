import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
  {
    path: 'pageNotFound',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
