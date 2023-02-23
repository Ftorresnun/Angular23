import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { AlumnoListaComponent } from './Alumno/alumnoLista/alumnoLista.component';
import { AlumnoTituloPipe } from './Alumno/alumnoLista/alumnoTitulo.pipe';
import { AlumnoCountComponent } from './Alumno/alumnoCount/alumnoCount.component';
import { profesorComponent } from './profesor/profesor.component';

const appRoutes: Routes = [
  { path: 'alumnos', component: AlumnoListaComponent },
  { path: 'profesores', component: profesorComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListaComponent,
    AlumnoTituloPipe,
    AlumnoCountComponent,
    profesorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
