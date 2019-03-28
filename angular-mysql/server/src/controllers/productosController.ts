import { Request, Response } from 'express';

import db from '../database';

class ProductosController {

    public async list(req: Request, res: Response): Promise<void> {
        const productos = await db.query('SELECT * FROM articulo');
        res.json(productos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productos = await db.query('SELECT * FROM articulo WHERE id_producto = ?', [id]);
        if(productos.length > 0) {
            return res.json(productos[0]);
        }
        res.status(404).json({message: 'El producto no existe'});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO articulo set ?', [req.body]);
        res.json({message: "Producto agregado"});
    }


    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE articulo set ? WHERE id_producto = ?', [req.body, id]);
        res.json({message: 'Se ha actualizado el producto'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM articulo WHERE id_producto = ?', [id]);
        res.json({message: 'El producto ha sido eliminado'});
    }

}

const productosController = new ProductosController();
export default productosController;