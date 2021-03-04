import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MaterialModule } from "@material/material.module";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MovieDetailsModule { }
