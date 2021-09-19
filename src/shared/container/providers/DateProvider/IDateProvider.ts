export interface IDateProvider {
  dateNow(): Date;
  convertToUTC(date: Date): string;
  dateAddDay(date: Date, days: number): Date;
  compareInDays(start_date: Date, end_date: Date): number;
  compareInHours(start_date: Date, end_date: Date): number;
  compareIfBefore(start_date: Date, end_date: Date): boolean;
  addDays(days: number): Date;
  addHours(hours: number): Date;
}
