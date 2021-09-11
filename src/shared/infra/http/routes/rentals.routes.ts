import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';

const rentalsRoutes = Router();
const createRentalController = new CreateRentalController();

rentalsRoutes.use(ensureAuthenticated);

rentalsRoutes.post('/', createRentalController.handle);

export { rentalsRoutes };
