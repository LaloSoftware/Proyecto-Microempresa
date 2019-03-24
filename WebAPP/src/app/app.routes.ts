import {RouterModule , Routes} from "@angular/router";

import { PuntoDeVentaComponent } from "./components/punto-de-venta/punto-de-venta.component";
import { ProveedoresComponent } from "./components/proveedores/proveedores.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { RegistrarProductosComponent } from "./components/registrar-productos/registrar-productos.component";
import { BuscarProductoComponent } from "./components/buscar-producto/buscar-producto.component";
import { GenerarCotizacionComponent } from "./components/generar-cotizacion/generar-cotizacion.component";

const APP_ROUTES: Routes = [
    { path:"punto_de_venta",  component: PuntoDeVentaComponent},
    { path:"proveedores",  component: ProveedoresComponent},
    { path:"productos",  component: ProductosComponent},
    { path:"producto/:id_p", component: ProductoComponent },
    { path:"productos/nuevo", component: RegistrarProductosComponent },
    { path:"productos/:cadena", component: BuscarProductoComponent },
    { path:"generar_cotizacion", component: GenerarCotizacionComponent },
    { path: "**", pathMatch: "full", redirectTo: "punto_de_venta" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);