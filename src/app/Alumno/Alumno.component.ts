import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alumno',
  templateUrl: './Alumno.component.html',
  styleUrls: ['./Alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  columnas: number = 2;
  nombre: string = "Perico";
  apellidos: string = "Delgado";
  direccion: string = "Segovia City";
  edad: number = 60;
  visibles: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  alternarVisibles(): void{
    this.visibles = !this.visibles;
  }

}
