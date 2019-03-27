import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../services/info.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: []
})
export class InfoComponent implements OnInit {
  public informacion: any;
  constructor(
    private _infoService : InfoService
  ) { }

  ngOnInit() {
    this.informacion = this._infoService.obtenerDatos();
    console.log(this.informacion);
    
  }

}
