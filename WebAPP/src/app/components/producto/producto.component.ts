import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public producto: Producto;
  private estado:string = "vista";
  constructor( private _productosService: ProductosService,
               private _activatedRoute: ActivatedRoute
    ) {
      this._activatedRoute.params.subscribe( (params)=> this.producto = this._productosService.getProducto(params["id_p"]));
    }

  ngOnInit() {
  }

  public cambiarEstado(){
    if(this.estado == "vista"){
      this.estado = "edicion";
    }
    else{
      this.estado = "vista";
    }
    console.log(this.estado);
  }
}

interface Producto{
  id_producto: number,
  descripcion: string,
  precio_unitario_sin_impuestos: number,
  precio_pieza_sin_impuestos: number,
  iva: number,
  ieps: number,
  precio_unitario_con_impuestos: number,
  precio_pieza_con_impuestos: number,
  precio_mayoreo: number,
  precio_menudeo: number,
  cantidad_unidades_inventario: number,
  cantidad_piezas_inventario: number,
  cantidad_minima_inventario: number,
  estado: string
}