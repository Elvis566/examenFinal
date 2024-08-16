import { Component } from '@angular/core';
import { CinemaServicesService } from '../Servicios/cinema-services.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-habitacion',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  listaHabitaciones:any
  listaCines:any
  formulario:any
  op:any
  idEs:any

  constructor(private services:CinemaServicesService){}

  ngOnInit(){
    this.TraerHabitaciones();
    this.traerCines();
  }

  CreateHabitaciones(numeroHabitacion:any,numeroAsientos:any,pelicula:any,cine_id:any){
    this.services.createHabitaciones(numeroHabitacion.value, numeroAsientos.value, pelicula.value, cine_id.value).subscribe({
      next: (datos:any)=>{

      },
      error:(e)=>{
        console.log(e);
      }
    })
  }
  TraerHabitaciones(){
    this.services.getHabitaciones().subscribe({
      next : (datos:any)=>{
  
        this.listaHabitaciones = datos.datos;
  
      },
      error:(e)=>{
        console.log('Error al obtener datos');
      }
    })
  }

  traerCines(){
    this.services.getCine().subscribe({
      next : (datos:any)=>{
  
        this.listaCines = datos.registro;
      },
      error:(e)=>{
        console.log('Error al obtener datos');
      }
    })
  }

  Reservamos(id:any){
    this.op=true;
    this.idEs=id
    console.log(id);
  }

  Reserva(numeroAsientos:any, id:any){
    console.log(id);
    console.log(numeroAsientos.value);
    this.services.reservar(numeroAsientos.value, id).subscribe({
      next: (datos:any)=>{

      },
      error:(e)=>{
        console.log(e);
      }
    })
  }
  
  limpiarFormulario() {
    // Obtener el formulario por su ID
     this.formulario = document.getElementById("miFormulario");

    // Recorrer los elementos del formulario y establecer su valor a una cadena vacía
    for (var i = 0; i < this.formulario.elements.length; i++) {
      var elemento = this.formulario.elements[i];
      if (elemento.type !== "button") { // Excluir el botón del formulario
        elemento.value = "";
      }
    }
  }
}
