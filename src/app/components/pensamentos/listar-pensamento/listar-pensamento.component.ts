import { Component, OnInit } from '@angular/core';
import { IPensamento } from 'src/app/interfaces/IPensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
  public listaPensamentos: IPensamento[] = [
    {
      conteudo: 'teste1',
      autoria: 'teste1',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et dolore velit vero voluptate cumque officia unde error consequuntur cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et dolore velit vero voluptate cumque officia unde error consequuntur cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et dolore velit vero voluptate cumque officia unde error consequuntur cum!',
      autoria: 'teste2',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et dolore velit vero voluptate cumque officia unde error consequuntur cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et dolore velit vero voluptate cumque officia unde error consequuntur cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et dolore velit vero voluptate cumque officia unde error consequuntur cum!',
      autoria: 'teste3',
      modelo: 'modelo3',
    },
    {
      conteudo: 'teste2',
      autoria: 'teste2',
      modelo: 'modelo2',
    },
    {
      conteudo: 'teste3',
      autoria: 'teste3',
      modelo: 'modelo3',
    },
    {
      conteudo: 'teste1',
      autoria: 'teste1',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
