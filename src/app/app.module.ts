import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { AlumnoListaComponent } from './Alumno/alumnoLista/alumnoLista.component';
import { AlumnoTituloPipe } from './Alumno/alumnoLista/alumnoTitulo.pipe';
import { AlumnoCountComponent } from './Alumno/alumnoCount/alumnoCount.component';
import { ProfesorComponent } from './profesor/profesor.component';


@NgModule({
  declarations: [	
    AppComponent,
    AlumnoComponent,
    AlumnoListaComponent,
    AlumnoTituloPipe,
    AlumnoCountComponent,
      ProfesorComponent
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
