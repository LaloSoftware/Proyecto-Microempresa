import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public seccion: string
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public establecer(seccion: string){
    this.seccion = seccion;
  }
  buscar(cadena: string){
    console.log(cadena);
    this._router.navigate(["/productos", cadena]);
  }
}
