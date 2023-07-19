import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
{path:'quienessomos',component:QuienessomosComponent},
{path: 'rutas', component:RutasComponent},
{path: 'ruta/:id', component:RutaComponent},
{path: '**', pathMatch:'full',redirectTo:'quienessomos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
