import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductosService } from "../../services/productos.service";


@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styles: []
})
export class BuscarProductoComponent implements OnInit {
  public productosEncontrados: any[];
  public busqueda: string;
  constructor(
    private _activatedRouter: ActivatedRoute,
    private _productosService: ProductosService,
    private _router: Router
  ) {
    this._activatedRouter.params.subscribe( (params)=> {
      this.busqueda = params["cadena"];
      this.productosEncontrados = this._productosService.getBuscados(params["cadena"]);
    });
   }

  ngOnInit() {
  }

  public verProducto(id_p:string){
    this._router.navigate(["producto", id_p]);
  }

}
