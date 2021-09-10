import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import CarsRepositoryInMemory from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import AppError from '@shared/errors/AppError';
import CreateCarUseCase from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: ICarsRepository;

describe('Create car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it('Should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car name',
      brand: 'Car brand',
      category_id: 'Category',
      daily_rate: 100,
      description: 'Car description',
      fine_amount: 60,
      license_plate: 'ABC-1234',
    });

    expect(car).toHaveProperty('id');
  });

  it('Should not be able to create a car with exists license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car name',
        brand: 'Car brand',
        category_id: 'Category',
        daily_rate: 100,
        description: 'Car description',
        fine_amount: 60,
        license_plate: 'ABC-1234',
      });

      await createCarUseCase.execute({
        name: 'Car name 2',
        brand: 'Car brand 2',
        category_id: 'Category 2',
        daily_rate: 90,
        description: 'Car description 2',
        fine_amount: 50,
        license_plate: 'ABC-1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car name',
      brand: 'Car brand',
      category_id: 'Category',
      daily_rate: 100,
      description: 'Car description',
      fine_amount: 60,
      license_plate: 'ABC-1234',
    });

    expect(car.available).toBe(true);
  });
});
