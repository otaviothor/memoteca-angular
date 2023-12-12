import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent {
  public pensamento: IPensamento = {} as IPensamento;

  constructor(
    private readonly pensamentoService: PensamentoService,
    private readonly router: Router
  ) {}

  public criarPensamento(): void {
    this.pensamentoService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
