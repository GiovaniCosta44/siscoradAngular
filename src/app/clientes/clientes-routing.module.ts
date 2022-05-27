import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesDeleteComponent } from './clientes-delete/clientes-delete.component';
import { ClientesFormUpComponent } from './clientes-form-up/clientes-form-up.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'new', component: ClienteFormComponent },
  { path: 'update/:taxId', component: ClientesFormUpComponent },
  { path: 'delete/:taxId', component: ClientesDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
