import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorterosRoutingModule } from './porteros-routing.module';
import { PorterosComponent } from './porteros/porteros.component';
import { FormPorteroComponent } from './form-portero/form-portero.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PorterosComponent,
    FormPorteroComponent
  ],
  imports: [
    CommonModule,
    PorterosRoutingModule,
    ReactiveFormsModule
  ]
})
export class PorterosModule { }
