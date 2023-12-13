import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full',
  },
  {
    path: 'listar-pensamento',
    children: [
      {
        path: '',
        component: ListarPensamentoComponent,
      },
      {
        path: 'excluir-pensamento/:id',
        component: ExcluirPensamentoComponent,
      },
      {
        path: 'editar-pensamento/:id',
        component: EditarPensamentoComponent,
      },
    ],
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
