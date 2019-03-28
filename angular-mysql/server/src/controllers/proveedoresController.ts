import { Request, Response} from 'express';

import db from '../database';

class ProveedoresController {

    public async list(req: Request, res: Response): Promise<void> {
        const proveedor = await db.query('SELECT * FROM proveedor');
        res.json(proveedor);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const proveedor = await db.query('SELECT * FROM proveedor WHERE id_proveedor = ?', [id]);
        if(proveedor.length > 0) {
            return res.json(proveedor[0]);
        }
        res.status(404).json({text: 'El proveedor no existe'});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO proveedor set ?', [req.body]);
        res.json({message: "Proveedor creado"});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE proveedor set ? WHERE id_proveedor = ?', [req.body, id]);
        res.json({message: 'El proveedor ha sido actualizado'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        await db.query('DELETE FROM proveedor WHERE id_proveedor = ?', [id]);
        res.json({message: "Proveedor eliminado"});
    }
}

const proveedoresController = new ProveedoresController();
export default proveedoresController;
