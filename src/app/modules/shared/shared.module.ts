import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleFriendlyPipe } from './pipes/title-friendly/title-friendly.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorModule } from './error/error.module';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TitleFriendlyPipe,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ErrorModule,
    RouterModule
  ],
  exports: [
    TitleFriendlyPipe,
    NavigationComponent,
    ErrorModule,
    MaterialModule
  ],
  providers: [
    TitleFriendlyPipe
  ]
})
export class SharedModule { }
