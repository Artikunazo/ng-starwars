import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/alert/error.component';
import { ErrorRoutingModule } from './error-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    MaterialModule
  ]
})
export class ErrorModule {}
