import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterRoutingModule } from './character-routing.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MaterialModule
  ]
})
export class CharacterModule { }
