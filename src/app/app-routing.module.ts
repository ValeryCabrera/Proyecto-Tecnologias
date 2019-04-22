import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    {path:'noticias', component:NoticiasComponent},
    {path:'inicio', component: InicioComponent},
    {path:'registro', component: RegistroComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'', component:InicioComponent},
    {path:'**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
