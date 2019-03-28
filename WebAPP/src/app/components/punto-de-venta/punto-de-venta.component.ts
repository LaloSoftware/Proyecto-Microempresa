import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.css']
})
export class PuntoDeVentaComponent implements OnInit {
  public ventaActual: Venta[] = [];
  public total:number;
  constructor(
              private _productosService: ProductosService
  ) {}

  ngOnInit() {
    this.ventaActual = [];
  }

  public AgregarProducto(id_p, cantidadVenta){
    if(this._productosService.getProducto(id_p) != null){
      let artVent = this._productosService.getProducto(id_p);
      console.log(artVent["descripcion"]);
      let encontrado: boolean = false;
      for(let i = 0; i < this.ventaActual.length; i++){
        if(this.ventaActual[i].pVenta["descripcion"] == artVent["descripcion"]){
          this.ventaActual[i].cantidad = (this.ventaActual[i].cantidad * 1) + (cantidadVenta * 1);
          this.ventaActual[i].subtotal = this.ventaActual[i].cantidad * this.ventaActual[i].pVenta["precio_menudeo"];
          encontrado = true;
        }
      }
      if(!encontrado){
        this.ventaActual.push({pVenta: artVent, cantidad: cantidadVenta, subtotal: artVent["precio_menudeo"] * cantidadVenta});
      }
      this.total = 0;
      for(let i = 0; i < this.ventaActual.length; i++){
        this.total += this.ventaActual[i].subtotal;
        console.log("Ultima: ",this.ventaActual[i].subtotal);
      }
      console.log("total: ",this.total);
      

      console.log("Venta ",this.ventaActual);
    }
  }
}

interface Venta{
  pVenta: object,
  cantidad: number,
  subtotal: number
}
