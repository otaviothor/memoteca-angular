import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: [
    './editar-pensamento.component.scss',
    '../criar-pensamento/criar-pensamento.component.scss',
  ],
})
export class EditarPensamentoComponent implements OnInit {
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

  public editarPensamento(): void {
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento']);
    });
  }
}
