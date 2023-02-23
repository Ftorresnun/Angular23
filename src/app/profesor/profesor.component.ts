import { Component, OnInit } from '@angular/core';
import { profesor } from './Profesor';
import { profesorService } from './profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class profesorComponent implements OnInit {

  profesores: profesor[];
  constructor(private service: profesorService) {
    this.profesores = [];
  }

  ngOnInit() {
    this.service.getProfesores().subscribe(datosProfesores => this.profesores = datosProfesores);
  }

}
