import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { Router } from "@angular/router";

import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {
  public productos: Producto[];
  constructor( private _productosService:ProductosService,
               private _router: Router
              ) { }

  ngOnInit() {
    // this.productos = this._productosService.getProductos();
    this.productos = this._productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err);
    );
  }

  public verProducto(id_p:number){
    this._router.navigate(["producto", id_p]);
  }

}
