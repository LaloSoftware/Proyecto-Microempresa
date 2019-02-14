class Articulo {
  constructor() {

  }
  id_articulo : string;
  descripcion : string;
  estado_producto :string;
  cantidad_minima_inventario : number;
  cantidad_pieza_inventario : number;
  cantidad_unitaria_inventario : number;
  precio_mayoreo : number;
  precio_menudeo : number;
  iva_producto : number;
  precio_pieza_con_impuestos : number;
  precio_unitario_con_impuestos : number;

  public EditarProducto() : boolean {
    return true
  }

  public EliminarProducto() : boolean {
    return true
  }

  public IngresarNuevoProducto() : boolean{
    return true
  }

  public ObtenerProductoPorCodigo(id_articulo) : boolean {
    return true
  }

  public ObtenerProductoPorDescripcion(descripcion) : boolean {
    return true
  }

  public visualizarProducto(id_articulo) : boolean{
    return true
  }
}
