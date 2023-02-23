import { Injectable } from '@angular/core';
import { profesor } from './Profesor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class profesorService {
  constructor(private _http: HttpClient) { }

  getProfesores(): Observable<profesor[]>{
    return this._http.get<profesor[]>("https://localhost:44391/api/Profesor");

}

}
