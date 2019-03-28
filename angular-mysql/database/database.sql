CREATE DATABASE MiN;

USE MiN;

CREATE TABLE articulo(
    id_producto VARCHAR(30) NOT NULL PRIMARY KEY,
    descripcion VARCHAR(50),
    precio_unitario_sin_impuestos VARCHAR(10),
    precio_pieza_sin_impuestos VARCHAR(10),
    iva VARCHAR(5),
    ieps VARCHAR(5),
    precio_unitario_con_impuestos VARCHAR(10),
    precio_pieza_con_impuestos VARCHAR(10),
    precio_mayoreo VARCHAR(10),
    precio_menudeo VARCHAR(10),
    cantidad_unidades_inventario VARCHAR(10),
    cantidad_piezas_inventario VARCHAR(10),
    cantidad_minima_inventario VARCHAR(10),
    estado VARCHAR(50)
);

CREATE TABLE proveedor(
    id_proveedor INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_personal VARCHAR(50),
    apellido_paterno VARCHAR(50),
    apellido_materno VARCHAR(50),
    empresa VARCHAR(50),
    numero_telefonico VARCHAR(50),
    correo_electronico VARCHAR(50)
);

CREATE TABLE usuario(
    id_empleado INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50),
    apellido_materno VARCHAR(50),
    apellido_paterno VARCHAR(50),
    puesto VARCHAR(50)
);

CREATE TABLE informacion(
    nombre VARCHAR(50),
    direccion VARCHAR(50),
    codigo_postal VARCHAR(5),
    rfc VARCHAR(50),
    nombre_dueño VARCHAR(50),
    tipo_negocio VARCHAR(30)
);

CREATE TABLE apartado(
    id_producto VARCHAR(50),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    abono DOUBLE,
    id_apartado VARCHAR(50) NOT NULL PRIMARY KEY,
    cantidad VARCHAR(50)
);

CREATE TABLE ventas(
    id_venta INT,
    id_articulo VARCHAR(50),
    cantidad INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_empleado VARCHAR(50)
);

CREATE TABLE compras(
    id_recepcion INT NOT NULL PRIMARY KEY,
    id_producto VARCHAR(50),
    id_receptor VARCHAR(50),
    id_proveedor VARCHAR(50),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE articulo;