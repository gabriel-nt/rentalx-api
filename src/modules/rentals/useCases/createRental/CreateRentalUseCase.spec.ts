import AppError from '@shared/errors/AppError';

import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';

import CreateRentalUseCase from './CreateRentalUseCase';

let dateAdd24Hours: Date;
let dayjsDateProvider: DayjsDateProvider;
let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe('Create rental', () => {
  beforeEach(() => {
    dayjsDateProvider = new DayjsDateProvider();
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider,
    );

    dateAdd24Hours = dayjsDateProvider.dateAddDay(new Date(), 1);
  });

  it('Should be able to create a new rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '1234',
      car_id: '123456',
      expected_return_date: dateAdd24Hours,
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('Should not be able to create a new rental if there is another open to the same user', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '1234',
        car_id: '1234567',
        expected_return_date: dateAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: '1234',
        car_id: '123456',
        expected_return_date: dateAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create a new rental if there is another open to the same car', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '1234',
        car_id: '123456',
        expected_return_date: dateAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '123456',
        expected_return_date: dateAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create a new rental with invalid return time', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '1234',
        car_id: '123456',
        expected_return_date: dateAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
