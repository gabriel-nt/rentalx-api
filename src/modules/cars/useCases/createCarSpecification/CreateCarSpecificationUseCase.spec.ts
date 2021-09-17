import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory';
import AppError from '@shared/errors/AppError';
import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new SpecificationRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory,
    );
  });

  it('Should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Monza',
      brand: 'Chevrolet',
      category_id: '86099f14-8aa9-4495-9dd5-915f5ac7c017',
      daily_rate: 90,
      description: 'Monza 94',
      fine_amount: 40,
      license_plate: 'IBC-8642',
    });

    const specification = await specificationsRepositoryInMemory.create({
      name: 'Test',
      description: 'Test',
    });

    const specifications_id = [specification.id];

    const specificationCar = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationCar).toHaveProperty('specifications');
    expect(specificationCar.specifications.length).toBe(1);
  });

  it('Should not be able to add a new specification to non-existent car', async () => {
    const car_id = '1234';
    const specifications_id = ['52543'];

    await expect(
      createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      }),
    ).rejects.toEqual(new AppError('Car does not exist'));
  });
});
