export type ApiDataType<T> = {
  data: T;
};

export type LaravelPaginationType<T> = {
  data: T[];
  meta: PaginationMeta;
};

export type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url: null | string;
    label: string;
    active: boolean;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type ApiParams = {
  page?: number;
  limit?: number;
  join?: string[];
  filter?: string[];
  s?: string;
  sort?: string;
};

export type ApiResponse = {
  status: "success" | "error";
  message: string | string[];
  [key: string]: any;
};
