import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule
  ],
})
export class MaterialModule {}
