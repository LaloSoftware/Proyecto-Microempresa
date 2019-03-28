import { Request, Response} from 'express';

import db from '../database';

class InformacionController {

    public async list(req: Request, res: Response): Promise<void> {
        const info = await db.query('SELECT * FROM informacion');
        res.json(info);
    }    

    public async create(req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO informacion set ?', [req.body]);
        res.json({message: "Informacion creada"});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE informacion set ? WHERE rfc = ?', [req.body, id]);
        res.json({message: 'La información ha sido actualizada'});
    }
}

const informacionController = new InformacionController();
export default informacionController;
