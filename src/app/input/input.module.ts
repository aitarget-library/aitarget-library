import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InputRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InputComponent]
})
export class InputModule { }
