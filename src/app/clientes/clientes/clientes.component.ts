import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cliente } from './../models/cliente';
import { ClientesService } from './../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes$: Observable<Cliente[]>;
  displayedColumns = ['taxId', 'nome', 'cep', 'sexo', 'endereco', 'email', 'telefone', 'actions']


  constructor(
    private clienteService: ClientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.clientes$ = this.clienteService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao Carregar Clientes.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onDelete(taxId: string){
    console.log('entrou');
    this.router.navigate(['delete', taxId], {relativeTo: this.route});

  }

  onUpdate(taxId: string){
    this.router.navigate(['update', taxId], {relativeTo: this.route});
  }
}
