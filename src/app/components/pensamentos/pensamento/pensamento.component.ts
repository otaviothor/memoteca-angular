import { Component, Input } from '@angular/core';
import { IPensamento } from 'src/app/interfaces/IPensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent {
  @Input() public pensamento: IPensamento = {} as IPensamento;

  constructor() {}

  public larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }
}
