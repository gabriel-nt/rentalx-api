import User from '../infra/typeorm/entities/User';
import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { classToClass } from 'class-transformer';

class UserMap {
  static toDTO({
    id,
    name,
    email,
    avatar,
    driver_license,
    avatar_url,
  }: User): IUserResponseDTO {
    return classToClass({
      id,
      name,
      email,
      avatar,
      driver_license,
      avatar_url,
    });
  }
}

export default UserMap;
