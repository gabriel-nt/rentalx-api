import { IRentalsRepository } from '../IRentalsRepository';
import Rental from '@modules/rentals/infra/typeorm/entities/Rental';
import ICreateRentalDTO from '@modules/rentals/dtos/ICreateRentalDTO';

class RentalsRepositoryInMemory implements IRentalsRepository {
  private rentals: Rental[] = [];

  async findById(id: string): Promise<Rental> {
    return this.rentals.find(rental => id === rental.id);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.car_id === car_id && !rental.end_date,
    );
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.user_id === user_id && !rental.end_date,
    );
  }

  async create({
    id,
    user_id,
    car_id,
    end_date,
    total,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = new Rental();

    Object.assign(rental, {
      user_id,
      car_id,
      id,
      end_date,
      total,
      expected_return_date,
      start_date: new Date(),
    });

    this.rentals.push(rental);

    return rental;
  }
}

export { RentalsRepositoryInMemory };
