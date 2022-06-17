import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    SharedModule
  ]
})
export class MovieDetailsModule { }
