import { Component } from '@angular/core';
import { RutasService } from 'src/app/services/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  ruta:number=0;  
  constructor(private _rutaService:RutasService,private router:Router){

  }
  encontrarRuta(ruta: string) {    
    console.log(ruta);
    this.ruta = this._rutaService.invocador(ruta);     
    if(this.ruta>=0){this.router.navigate(['/rutas',this.ruta]);
    }else console.log("Error en la busqueda");
  }
}
