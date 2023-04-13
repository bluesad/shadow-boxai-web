declare namespace Service {
  interface Pagination {
    page?: number;
    size?: number;
  }

  interface Results<T> {
    results: T[];
    total: number;
  }
}
