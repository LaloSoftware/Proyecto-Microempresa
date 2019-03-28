export interface Producto {
    id_producto: number;
    descripcion: string;
    precio_unitario_sin_impuestos: number;
    precio_pieza_sin_impuestos: number;
    iva: number;
    ieps: number;
    precio_unitario_con_impuestos: number;
    precio_pieza_con_impuestos: number;
    precio_mayoreo: number;
    precio_menudeo: number;
    cantidad_unidades_inventario: number;
    cantidad_piezas_inventario: number;
    cantidad_minima_inventario: number;
    estado: string;
}
