export default interface ICreateRentalDTO {
  user_id: string;
  car_id: string;
  id?: string;
  end_date?: Date;
  total?: number;
  expected_return_date: Date;
}
