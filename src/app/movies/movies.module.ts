import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CoreModule,
    MaterialModule,
    SharedModule
  ]
})
export class MoviesModule { }
