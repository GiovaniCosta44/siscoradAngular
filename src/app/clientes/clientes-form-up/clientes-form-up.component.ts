import { Cliente } from './../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClientesService } from './../services/clientes.service';

@Component({
  selector: 'app-clientes-form-up',
  templateUrl: './clientes-form-up.component.html',
  styleUrls: ['./clientes-form-up.component.scss']
})
export class ClientesFormUpComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {
    this.form = this.formBuilder.group({
      taxId: [null],
      nome: [null],
      cep: [null],
      sexo: [null],
      endereco: [null],
      email: [null],
      telefone: [null]
    });
  }

  ngOnInit(): void {
    //this.route.params.subscribe(
     // (params: any) => {
       // const taxId = params['taxId'];
       // console.log(taxId);
       //const cliente$ = this.service.loadByID(taxId);
       //cliente$.subscribe(cliente => {

      // })
      //}
    //)
  }


  onSubmit(){
    this.service.atualizar(this.form.value)
    .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  onSucess(){
    this.snackBar.open('Cliente Atualizado com Sucesso', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao Atualizar Cliente', '', {duration: 5000});
  }
}


