import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent {
  public pensamento = {
    id: '1',
    conteudo: 'learning angular 2+',
    autoria: 'dev',
    modelo: '',
  };

  constructor() {}

  public criarPensamento(): void {
    alert(JSON.stringify(this.pensamento));
  }

  public cancelar(): void {
    alert(JSON.stringify(this.pensamento));
  }
}
