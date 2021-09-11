export interface IDateProvider {
  dateNow(): Date;
  convertToUTC(date: Date): string;
  dateAddDay(date: Date, days: number): Date;
  compareInHours(start_date: Date, end_date: Date): number;
}
