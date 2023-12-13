import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss'],
})
export class ExcluirPensamentoComponent implements OnInit {
  public pensamento: IPensamento = {} as IPensamento;

  constructor(
    private readonly pensamentoService: PensamentoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(Number(id)).subscribe((res) => {
      this.pensamento = res;
    });
  }

  public excluirPensamento(): void {
    this.pensamentoService.excluir(Number(this.pensamento.id)).subscribe(() => {
      this.router.navigate(['/listar-pensamento']);
    });
  }

  public cancelar(): void {
    this.router.navigate(['/listar-pensamento']);
  }
}
