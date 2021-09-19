import { Router } from 'express';

import { ResetPasswordUserController } from '@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController';
import { SendForgotPasswordMailController } from '@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController';

const passwordRoutes = Router();

const resetPasswordUserController = new ResetPasswordUserController();
const sendForgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post('/reset', resetPasswordUserController.handle);
passwordRoutes.post('/forgot', sendForgotPasswordMailController.handle);

export { passwordRoutes };
