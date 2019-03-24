import { Injectable } from "@angular/core";

@Injectable()
export class ProductosService{
    private _productos:Producto[] = [
        {
            id_producto: 9876543210,
            descripcion: "Galletas Marias",
            precio_unitario_sin_impuestos: 160,
            precio_pieza_sin_impuestos: 8,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 180,
            precio_mayoreo: 8.9,
            precio_menudeo: 9.5,
            cantidad_unidades_inventario: 6,
            cantidad_piezas_inventario: 120,
            cantidad_minima_inventario: 20,
            estado: "activo",
            precio_pieza_con_impuestos: 9
        },
        {
            id_producto: 1234567890,
            descripcion: "Galletas Emperador",
            precio_unitario_sin_impuestos: 240,
            precio_pieza_sin_impuestos: 10,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 260,
            precio_mayoreo: 11.8,
            precio_menudeo: 12.5,
            cantidad_unidades_inventario: 3,
            cantidad_piezas_inventario: 72,
            cantidad_minima_inventario: 20,
            estado: "activo",
            precio_pieza_con_impuestos: 12.5
        },
        {
            id_producto: 7896541230,
            descripcion: "Chokis",
            precio_unitario_sin_impuestos: 200,
            precio_pieza_sin_impuestos: 10,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 230,
            precio_mayoreo: 13,
            precio_menudeo: 12,
            cantidad_unidades_inventario: 6,
            cantidad_piezas_inventario: 120,
            cantidad_minima_inventario: 20,
            estado: "activo",
            precio_pieza_con_impuestos: 10
        },
        {
            id_producto: 9638527410,
            descripcion: "Sabritas",
            precio_unitario_sin_impuestos: 300,
            precio_pieza_sin_impuestos: 12,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 350,
            precio_mayoreo: 13,
            precio_menudeo: 15,
            cantidad_unidades_inventario: 10,
            cantidad_piezas_inventario: 10,
            cantidad_minima_inventario: 5,
            estado: "activo",
            precio_pieza_con_impuestos: 12.5
        },
        {
            id_producto: 9877411235,
            descripcion: "Mole grande",
            precio_unitario_sin_impuestos: 450,
            precio_pieza_sin_impuestos: 24,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 480,
            precio_mayoreo: 27,
            precio_menudeo: 26,
            cantidad_unidades_inventario: 3,
            cantidad_piezas_inventario: 72,
            cantidad_minima_inventario: 20,
            estado: "activo",
            precio_pieza_con_impuestos: 25.5
        },
        {
            id_producto: 7418529630,
            descripcion: "Doritos Rojos",
            precio_unitario_sin_impuestos: 150,
            precio_pieza_sin_impuestos: 10,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 180,
            precio_mayoreo: 11.8,
            precio_menudeo: 12,
            cantidad_unidades_inventario: 6,
            cantidad_piezas_inventario: 6,
            cantidad_minima_inventario: 5,
            estado: "activo",
            precio_pieza_con_impuestos: 11.5
        },
        {
            id_producto: 3218526540,
            descripcion: "Coca cola 500ml",
            precio_unitario_sin_impuestos: 160,
            precio_pieza_sin_impuestos: 8,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 180,
            precio_mayoreo: 8.9,
            precio_menudeo: 9.5,
            cantidad_unidades_inventario: 6,
            cantidad_piezas_inventario: 120,
            cantidad_minima_inventario: 20,
            estado: "activo",
            precio_pieza_con_impuestos: 9
        },
        {
            id_producto: 9878522581,
            descripcion: "Coca cola 600ml",
            precio_unitario_sin_impuestos: 160,
            precio_pieza_sin_impuestos: 8,
            iva: 16,
            ieps: 0,
            precio_unitario_con_impuestos: 180,
            precio_mayoreo: 8.9,
            precio_menudeo: 9.5,
            cantidad_unidades_inventario: 6,
            cantidad_piezas_inventario: 120,
            cantidad_minima_inventario: 20,
            estado: "activo",
            precio_pieza_con_impuestos: 9
        }
    ];
    
    constructor(){
        
    }

    public getProductos(): Producto[]{
        return this._productos;
    }
    public getProducto(id_p): Producto{
        for (let index = 0; index < this._productos.length; index++) {
            if(this._productos[index].id_producto == id_p){
                return this._productos[index];
            }
        }
        return null;
    }
    public getBuscados(cadena:string): Producto[]{
        let productosBuscados: Producto[] = [];
        cadena = cadena.toLowerCase();
        let nombreProducto: string; 
        for( let producto of this._productos){
            nombreProducto = producto.descripcion.toLowerCase();
            if(nombreProducto.indexOf(cadena) >= 0){
                productosBuscados.push(producto);
            }
        }
        return productosBuscados;
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