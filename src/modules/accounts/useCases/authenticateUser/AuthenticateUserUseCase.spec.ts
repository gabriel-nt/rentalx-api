import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import AppError from '@shared/errors/AppError';

import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { UsersTokensRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';

import CreateUserUseCase from '../createUser/CreateUserUseCase';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

let dateProvider: IDateProvider;
let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
  beforeEach(() => {
    dateProvider = new DayjsDateProvider();
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);

    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
    );
  });

  it('Should be able to authenticate a user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'user@test.com',
      password: '123456',
      name: 'User',
    };

    await createUserUseCase.execute(user);

    const response = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to authenticate a non user exist', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'user@test.com',
        password: '123456',
      }),
    ).rejects.toEqual(new AppError('Email or password incorrect'));
  });

  it('should not be able to authenticate with invalid password', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'user@test.com',
      password: '123456',
      name: 'User',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: '12345',
      }),
    ).rejects.toEqual(new AppError('Email or password incorrect'));
  });
});
