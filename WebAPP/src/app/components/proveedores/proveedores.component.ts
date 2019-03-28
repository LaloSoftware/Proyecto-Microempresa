import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from "../../services/proveedores.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {
  public proveedores:any[];
  constructor( private _proveedoresService: ProveedoresService,
               private router: Router
  ) { }

  ngOnInit() {
    this.proveedores = this._proveedoresService.getProveedores();
    console.log(this.proveedores);
  }

  public GenerarNuevo(): void{
    this.router.navigate(["proveedores", "nuevo"]);
  }

}
