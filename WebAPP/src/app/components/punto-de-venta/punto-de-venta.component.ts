import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.css']
})
export class PuntoDeVentaComponent implements OnInit {
  public ventaActual: Venta[] = [];
  constructor(
              private _productosService: ProductosService
  ) {}

  ngOnInit() {
    this.ventaActual = [];
  }

  public AgregarProducto(id_p, cantidadVenta){
    if(this._productosService.getProducto(id_p) != null){
      this.ventaActual.push({pVenta: this._productosService.getProducto(id_p), cantidad: cantidadVenta});
    }
    for(let i =0; i < this.ventaActual.length; i++){
      console.log(this.ventaActual[i].pVenta["descripcion"]);
    }
    
  }


}

interface Venta{
  pVenta: object,
  cantidad: number
}
