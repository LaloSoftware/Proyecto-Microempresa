import { Router } from 'express';

import informacionController from '../controllers/informacionController';

class InformacionRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', informacionController.list);
        this.router.post('/', informacionController.create);
        this.router.put('/:id', informacionController.update);
    }
}

const informacionRoutes = new InformacionRoutes();
export default informacionRoutes.router;