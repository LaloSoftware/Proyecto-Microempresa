import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {
  public productos: any[] = [];
  constructor( private _productosService:ProductosService,
               private _router: Router
              ) { }

  ngOnInit() {
    this.productos = this._productosService.getProductos();
  }

  public verProducto(id_p:number){
    this._router.navigate(["producto", id_p]);
  }

}
