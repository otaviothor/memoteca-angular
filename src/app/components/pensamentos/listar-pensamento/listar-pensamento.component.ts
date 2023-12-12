import { Component, OnInit } from '@angular/core';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
  public listaPensamentos: IPensamento[] = [];

  constructor(private readonly pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((res) => {
      this.listaPensamentos = res;
    });
  }
}
