import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import ListAvailableCarsUseCase from './ListAvailableCarsUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('Should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Monza',
      brand: 'Chevrolet',
      category_id: '86099f14-8aa9-4495-9dd5-915f5ac7c017',
      daily_rate: 90,
      description: 'Monza 94',
      fine_amount: 40,
      license_plate: 'IBC-8642',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Uno',
      brand: 'Fiat',
      category_id: '86099f14-8aa9-4495-9dd5-915f5ac7c017',
      daily_rate: 90,
      description: 'Ano 92',
      fine_amount: 40,
      license_plate: 'IBC-8644',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Fiat',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Corolla',
      brand: 'Toyota',
      category_id: '86099f14-8aa9-4495-9dd5-915f5ac7c017',
      daily_rate: 90,
      description: 'Ano 2021',
      fine_amount: 40,
      license_plate: 'IBC-8654',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Corolla',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Corolla',
      brand: 'Toyota',
      category_id: '86099f14-8aa9-4495-9dd5-915f5ac7c033',
      daily_rate: 90,
      description: 'Ano 2021',
      fine_amount: 40,
      license_plate: 'IBC-8654',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '86099f14-8aa9-4495-9dd5-915f5ac7c033',
    });

    expect(cars).toEqual([car]);
  });
});
