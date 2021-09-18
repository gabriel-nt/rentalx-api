import { Router } from 'express';
import { RefreshTokenController } from '@modules/accounts/useCases/refreshToken/RefreshTokenController';
import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const autheticateRoutes = Router();
const refreshTokenController = new RefreshTokenController();
const authenticateUserController = new AuthenticateUserController();

autheticateRoutes.post('/sessions', authenticateUserController.handle);
autheticateRoutes.post('/refresh-token', refreshTokenController.handle);

export { autheticateRoutes };
