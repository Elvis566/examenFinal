import { Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { HabitacionComponent } from './habitacion/habitacion.component';


export const routes: Routes = [
    { path: 'cine', component:CineComponent},
    { path: 'habitacion', component:HabitacionComponent},
    
];
