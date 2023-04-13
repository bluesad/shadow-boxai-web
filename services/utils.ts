export function convertPagination(param?: Service.Pagination) {
  if (param == null) return param;

  const { page, size, ...others } = param;
  return {
    ...others,
    pageIndex: page,
    pageSize: size,
  };
}
