import { Component } from '@angular/core';
import { CinemaServicesService } from '../Servicios/cinema-services.service';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  formulario:any;
  constructor(private servicios:CinemaServicesService){}

  createCines(nombre:any,lugar:any ){
    this.servicios.createCine(nombre.value, lugar.value).subscribe({
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
