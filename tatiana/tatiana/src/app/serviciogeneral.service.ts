import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciogeneralService {

  URL_viaje='http://localhost/proyectomintic/API/crud/Insertardatos.php';

  constructor(private http: HttpClient) { }

  InsertarDatos(usuarios: Modulo){
    //alert("llego al servicio" + JSON.stringify(usuarios));
    
     return this.http.post<Modulo>(this.URL_viaje,usuarios);


  }
  
}
