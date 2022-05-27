import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'api/clientes';

  constructor(private httpClient: HttpClient) { }

  list() {
     return this.httpClient.get<Cliente[]>(this.API)
     .pipe(
       first(),
       delay(1500),
      tap(clientes => console.log(clientes))
    );
  }

  save(record: Cliente){
    return this.httpClient.post<Cliente>(this.API, record);

  }

  //loadByID(taxId: string){
   //return this.httpClient.get(`${this.API}/${taxId}`);
 // }


  atualizar(cliente: Cliente){
    return this.httpClient.put<Cliente>(`${this.API}/${cliente.taxId}`, cliente);
  }

  delete(taxId: string){
    console.log(taxId)
    return this.httpClient.delete(`${this.API}/${taxId}`);
  }
}
