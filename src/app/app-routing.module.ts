import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '@modules/shared/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@modules/movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: 'movie/:title',
        loadChildren: () =>
          import('@modules/movie-details/movie-details.module').then(
            (m) => m.MovieDetailsModule
          ),
      },
      {
        path: 'character/:name',
        loadChildren: () =>
          import('@modules/character/character.module').then((m) => m.CharacterModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('@modules/shared/error/error.module').then((m) => m.ErrorModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
