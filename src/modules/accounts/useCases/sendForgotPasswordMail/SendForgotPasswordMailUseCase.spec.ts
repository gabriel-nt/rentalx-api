import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { UsersTokensRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { MailProviderInMemory } from '@shared/container/providers/MailProvider/in-memory/MailProviderInMemory';
import AppError from '@shared/errors/AppError';
import SendForgotPasswordMailUseCase from './SendForgotPasswordMailUseCase';

let dateProvider: DayjsDateProvider;
let mailProvider: MailProviderInMemory;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;

describe('Send Forgot Mail', () => {
  beforeEach(() => {
    dateProvider = new DayjsDateProvider();
    mailProvider = new MailProviderInMemory();
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider,
    );
  });

  it('Should be able to send a forgot password mail to user', async () => {
    const sendMail = jest.spyOn(mailProvider, 'sendMail');

    await usersRepositoryInMemory.create({
      driver_license: '4070823391',
      email: 'ocuha@du.bd',
      name: 'Laura Cohen',
      password: '3460582215',
    });

    await sendForgotPasswordMailUseCase.execute('ocuha@du.bd');

    expect(sendMail).toBeCalled();
  });

  it('Should not be able to send an mail if user does not exists', async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute('ocuha@da.ts'),
    ).rejects.toEqual(new AppError('User does not exists!'));
  });

  it('Should be able to create an user token', async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      'create',
    );

    await usersRepositoryInMemory.create({
      driver_license: '213699240',
      email: 'ruz@nalobi.la',
      name: 'Adelaide Gibbs',
      password: '3460582215',
    });

    await sendForgotPasswordMailUseCase.execute('ruz@nalobi.la');

    expect(generateTokenMail).toBeCalled();
  });
});
