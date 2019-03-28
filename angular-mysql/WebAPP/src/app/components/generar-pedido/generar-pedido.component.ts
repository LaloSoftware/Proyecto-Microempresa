import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { ProveedoresService } from "../../services/proveedores.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-generar-pedido',
  templateUrl: './generar-pedido.component.html',
  styles: []
})
export class GenerarPedidoComponent implements OnInit {
  public pasos: number;
  public productos: any[] = [];
  public productosAEnviar: any[] = [];
  public proveedores: any[] = [];
  public proveedoresAEnviar: any[] = [];
  constructor(
    private _productosService: ProductosService,
    private _proveedoresService: ProveedoresService,
    private router: Router
  ) {
    this.productos = this._productosService.getProductos();
    this.proveedores = this._proveedoresService.getProveedores();
    this.pasos = 1;
  }

  ngOnInit() {
  }

  public Avanzar():void{
    this.pasos += 1;
    if(this.pasos > 3){
      this.pasos = 1;
    }
    console.log(this.pasos);
  }
  
  public RegresarAProveedores(): void{
    this.router.navigate(["/proveedores"]);
  }
}
