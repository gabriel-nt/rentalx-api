import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalControlller';
import { ListRentalsByUserController } from '@modules/rentals/useCases/listRentalsByUser/ListRentalByUserController';

const rentalsRoutes = Router();
const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalsRoutes.use(ensureAuthenticated);

rentalsRoutes.post('/', createRentalController.handle);
rentalsRoutes.post('/:id', devolutionRentalController.handle);
rentalsRoutes.get('/user', listRentalsByUserController.handle);

export { rentalsRoutes };
