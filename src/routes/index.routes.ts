import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { categoriesRoutes } from './categories.routes';
import { autheticateRoutes } from './authenticate.routes';
import { specificationsRouter } from './specifications.routes';

const router = Router();

router.use(autheticateRoutes);
router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRouter);

export { router };
