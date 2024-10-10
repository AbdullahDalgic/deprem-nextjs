export interface IPagination<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
}

export interface IGetParams {
  limit: number;
  page: number;
}
