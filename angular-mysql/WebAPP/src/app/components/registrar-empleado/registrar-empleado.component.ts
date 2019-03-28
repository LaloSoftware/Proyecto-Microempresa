import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styles: []
})
export class RegistrarEmpleadoComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  public Regresar(): void{
    this.router.navigate(["/Administracion", "empleados"]);
  }

}
