import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciogeneralService {

  URL_viaje='http://localhost/ciclo4Grupo10/API/crud/';

  constructor(private http:HttpClient ) { }

  Eliminar_persona(Codigo:Modulo){
    return this.http.get(`${this.URL_viaje}Eliminardatos.php?Codigo=${Codigo}`);
    }
    
  lista_datos(){    
      return this.http.get(`${this.URL_viaje}Listardatos.php`);
  }

}
