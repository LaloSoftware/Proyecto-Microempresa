import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { ProveedoresService } from "./services/proveedores.service";
import { ProductosService } from "./services/productos.service";
import { InfoService } from "./services/info.service";
import { EmpleadosService } from "./services/empleados.service";

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
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';
import { InfoComponent } from './components/info/info.component';
import { AdminComponent } from './components/admin/admin.component';
import { from } from 'rxjs';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FooterComponent } from './components/shared/footer/footer.component';



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
    BuscarProductoComponent,
    InfoComponent,
    AdminComponent,
    EmpleadosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ ProveedoresService, ProductosService, InfoService, EmpleadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
