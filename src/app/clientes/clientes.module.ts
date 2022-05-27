import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesFormUpComponent } from './clientes-form-up/clientes-form-up.component';
import { ClientesDeleteComponent } from './clientes-delete/clientes-delete.component';



@NgModule({
  declarations: [
    ClientesComponent,
    ClienteFormComponent,
    ClientesFormUpComponent,
    ClientesDeleteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class ClientesModule { }
