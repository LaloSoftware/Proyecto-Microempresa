import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { ProveedoresService } from "./services/proveedores.service";
import { ProductosService } from "./services/productos.service";

//Componentes
import { AppComponent } from './app.component';
import { PuntoDeVentaComponent } from './components/punto-de-venta/punto-de-venta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RegistrarProductosComponent } from './components/registrar-productos/registrar-productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { GenerarCotizacionComponent } from './components/generar-cotizacion/generar-cotizacion.component';
import { GenerarPedidoComponent } from './components/generar-pedido/generar-pedido.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NvVentasComponent } from './components/shared/nv-ventas/nv-ventas.component';
import { NvProveedoresComponent } from './components/shared/nv-proveedores/nv-proveedores.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    PuntoDeVentaComponent,
    NavbarComponent,
    ProductoComponent,
    RegistrarProductosComponent,
    ProveedoresComponent,
    GenerarCotizacionComponent,
    GenerarPedidoComponent,
    ProductosComponent,
    NvVentasComponent,
    NvProveedoresComponent,
    BuscarProductoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ ProveedoresService, ProductosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
