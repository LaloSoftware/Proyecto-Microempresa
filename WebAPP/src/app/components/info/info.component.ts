import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../services/info.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: []
})
export class InfoComponent implements OnInit {
  public informacion: any;
  public estado: string;
  constructor(
    private _infoService : InfoService
  ) {
    this.estado = "vista";
  }

  ngOnInit() {
    this.informacion = this._infoService.obtenerDatos();
    
  }

  public cambiarEstado(): void{
    if(this.estado == "vista"){
      this.estado = "edicion";
    }
    else{
      this.estado = "vista";
    }
    console.log(this.estado);
  }

}
