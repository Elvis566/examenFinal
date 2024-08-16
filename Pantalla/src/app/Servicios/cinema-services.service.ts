import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaServicesService {

  constructor( private http:HttpClient ) { }

  createCine(nombre:any,lugar:any){
    return this.http.post('http://127.0.0.1:8000/api/createCine',{
      nombre:nombre,
      lugar:lugar
    })
  }

  getCine(){
    return this.http.get('http://127.0.0.1:8000/api/traerCines')
  }

  createHabitaciones(numeroHabitacion:any,numeroAsientos:any, pelicula:any,cine_id:any){
    return this.http.post('http://127.0.0.1:8000/api/createHabitaciones',{
      numeroHabitacion:numeroHabitacion,
      numeroAsientos:numeroAsientos,
      pelicula:pelicula,
      cine_id:cine_id
    })
  }

  getHabitaciones(){
    return this.http.get('http://127.0.0.1:8000/api/traerHabitaciones');
  }

  reservar(numeroAsientos:any, id:any){
    return this.http.put('http://127.0.0.1:8000/api/reservar',
    {
      numeroAsientos:numeroAsientos,
      id:id
    });
  }
}
