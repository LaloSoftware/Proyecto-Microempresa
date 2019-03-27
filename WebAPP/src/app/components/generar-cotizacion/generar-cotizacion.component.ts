import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { ProveedoresService } from "../../services/proveedores.service";


@Component({
  selector: 'app-generar-cotizacion',
  templateUrl: './generar-cotizacion.component.html',
  styles: []
})
export class GenerarCotizacionComponent implements OnInit {
  public productos: any[] = [];
  public productosAEnviar: any[] = [];
  public proveedores: any[] = [];
  public proveedoresAEnviar: any[] = [];
  constructor(
    private _productosService: ProductosService,
    private _proveedoresService: ProveedoresService
  ) {
    this.productos = this._productosService.getProductos();
    this.proveedores = this._proveedoresService.getProveedores();
   }

  ngOnInit() {
  }

}
