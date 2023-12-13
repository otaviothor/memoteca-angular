import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPensamento } from '../interfaces/IPensamento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  constructor(private readonly http: HttpClient) {}

  public listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(environment.apiURL);
  }

  public criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(environment.apiURL, pensamento);
  }

  public excluir(id: number): Observable<IPensamento> {
    return this.http.delete<IPensamento>(`${environment.apiURL}/${id}`);
  }

  public buscarPorId(id: number): Observable<IPensamento> {
    return this.http.get<IPensamento>(`${environment.apiURL}/${id}`);
  }
}
