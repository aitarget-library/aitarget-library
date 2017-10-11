import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SelectRoutingModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [SelectComponent]
})
export class SelectModule { }
