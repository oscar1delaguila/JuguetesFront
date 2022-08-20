import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugueteListadoComponent } from './components/juguete-listado/juguete-listado.component';
import { JugueteDetalleComponent } from './components/juguete-detalle/juguete-detalle.component';
import { JugueteCatalogoComponent } from './components/juguete-catalogo/juguete-catalogo.component';
import { JugueteFormComponent } from './components/juguete-form/juguete-form.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [

  

  {
    path: 'listado',
    component: JugueteListadoComponent,
  },


  {
    path: 'login',
    component: LoginComponent,
  },


  {
    path: 'perfil',
    component: PerfilComponent,
  },


  { 
    path: 'juguetes-segunda', 
    component: JugueteCatalogoComponent 
  },

  { 
    path: 'juguetes', 
    component: JugueteCatalogoComponent 
  },


  { 
    path: 'juguete/:id', 
    component: JugueteDetalleComponent 
  },
 

  {
    path: 'juguete-form/:id',
    component: JugueteFormComponent,
  },

  { 
    path: '', 
    component: JugueteListadoComponent 
  }, 

  { 
    path: '**', 
    component: JugueteCatalogoComponent 
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
