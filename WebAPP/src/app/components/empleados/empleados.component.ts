import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../../services/empleados.service";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {
  public empleados: any[];
  constructor(
    private _empleadosService: EmpleadosService
  ) { }

  ngOnInit() {
    this.empleados = this._empleadosService.getEmpleados();
    console.log(this.empleados);
    
  }

}
