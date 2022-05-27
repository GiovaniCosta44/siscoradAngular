import { Cliente } from './../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientesService } from './../services/clientes.service';


@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.scss']
})
export class ClientesDeleteComponent implements OnInit {

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
      });
     }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.delete(this.form.value.taxId)
    .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  onSucess(){
    this.snackBar.open('Cliente Deletado com Sucesso', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao Deletar Cliente', '', {duration: 5000});
  }

}
