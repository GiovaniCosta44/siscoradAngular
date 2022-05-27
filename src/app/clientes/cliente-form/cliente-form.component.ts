import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private service: ClientesService,
    private snackBar: MatSnackBar,
    private location: Location
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

  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  onSucess(){
    this.snackBar.open('Cliente Salvo com Sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar cliente', '', {duration: 5000});
  }
}
