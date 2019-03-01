DROP DATABASE IF EXISTS `microempresa` CASCADE;
CREATE DATABASE microempresa
USE microempresa;

/* Drop Tables */

DROP TABLE IF EXISTS `Apartado` CASCADE;

DROP TABLE IF EXISTS `Articulo` CASCADE;

DROP TABLE IF EXISTS `Informacion` CASCADE;

DROP TABLE IF EXISTS `Proveedor` CASCADE;

DROP TABLE IF EXISTS `Usuario` CASCADE;

/* Create Tables */

CREATE TABLE `Apartado`
(
	`id_producto` VARCHAR(50) NOT NULL,
	`fecha` DATE NULL,
	`abono` DOUBLE(10,2) NULL
)

;

CREATE TABLE `Articulo`
(
	`id_producto` INT NOT NULL,
	`descripcion` VARCHAR(50) NULL,
	`precio_unitario_sin_impuestos` DOUBLE(10,2) NULL,
	`precio_piezza_sin_impuestos` DOUBLE(10,2) NULL,
	`IVA` FLOAT(0,0) NULL,
	`ieps` FLOAT(0,0) NULL,
	`precio_unitario_con_impuestos` DOUBLE(0,0) NULL,
	`precio_pieza_con_impuestos` DOUBLE(10,2) NULL,
	`precio_mayoreo` DOUBLE(10,2) NULL,
	`precio_menudeo` DOUBLE(10,2) NULL,
	`cantidad_unidades_inventario` INT NULL,
	`cantidad_piezas_inventario` INT NULL,
	`cantidad_minima_inventario` INT NULL,
	`Estado` VARCHAR(50) NULL,
	CONSTRAINT `PK_Articulo` PRIMARY KEY (`id_producto` ASC)
);

CREATE TABLE `Informacion`
(
	`nombre` VARCHAR(50) NULL,
	`direccion` VARCHAR(50) NULL,
	`codigo_postal` VARCHAR(5) NULL,
	`rfc` VARCHAR(50) NULL,
	`nombre_dueno` VARCHAR(50) NULL,
	`tipo_negocio` VARCHAR(30) NULL
);

CREATE TABLE `Proveedor`
(
	`id_proveedor` INT NOT NULL,
	`nombre_personal` VARCHAR(50) NULL,
	`apellido_paterno` VARCHAR(50) NULL,
	`apellido_materno` VARCHAR(50) NULL,
	`empresa` VARCHAR(50) NULL,
	`numero_telefonico` VARCHAR(15) NULL,
	`correo_electronico` VARCHAR(50) NULL,
	CONSTRAINT `PK_Proveedor` PRIMARY KEY (`id_proveedor` ASC)
);

CREATE TABLE `Usuario`
(
	`id_empleado` INT NOT NULL AUTO_INCREMENT,
	`nombre_usuario` VARCHAR(50) NOT NULL,
	`apellido_paterno` VARCHAR(50) NULL,
	`apellido_materno` VARCHAR(50) NULL,
	`puesto` VARCHAR(30) NULL,
	CONSTRAINT `PK_Usuario` PRIMARY KEY (`id_empleado` ASC)
);

SET FOREIGN_KEY_CHECKS=1
;
