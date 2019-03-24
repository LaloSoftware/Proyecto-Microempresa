import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-nv-ventas',
  templateUrl: './nv-ventas.component.html',
  styles: []
})
export class NvVentasComponent implements OnInit {

  constructor(
                private _router: Router
  ) { }

  ngOnInit() {
  }

  buscar(cadena: string){
    console.log(cadena);
    this._router.navigate(["/productos", cadena]);
  }

}
