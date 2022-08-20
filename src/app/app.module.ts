import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; 
import { PrebootModule } from 'preboot';
import { JugueteDetalleComponent } from './components/juguete-detalle/juguete-detalle.component';
import { JugueteListadoComponent } from './components/juguete-listado/juguete-listado.component';
import { JugueteCatalogoComponent } from './components/juguete-catalogo/juguete-catalogo.component';
import { JugueteFormComponent } from './components/juguete-form/juguete-form.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    JugueteDetalleComponent,
    JugueteListadoComponent,
    JugueteCatalogoComponent,
    JugueteFormComponent,
    LoginComponent,
    PerfilComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    ReactiveFormsModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
