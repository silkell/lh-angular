import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { FooterComponent } from './footer/footer.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { NavComponent } from './nav/nav.component';
import { PainelInicialComponent } from './painel-inicial/painel-inicial.component';

const routes: Routes = [
    {path:'nav', component:NavComponent},
    {path:'painel-inicial', component: PainelInicialComponent},
    {path:'cadastro-vagas', component: CadastroVagasComponent},
    {path:'mural-vagas', component: MuralVagasComponent},
    {path:'footer', component:FooterComponent},
    {path:'',redirectTo:'/painel-inicial', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
