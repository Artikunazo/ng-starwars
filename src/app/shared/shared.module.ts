import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleFriendlyPipe } from './pipes/title-friendly/title-friendly.pipe'


@NgModule({
  declarations: [
    TitleFriendlyPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TitleFriendlyPipe,
  ]
})
export class SharedModule { }
