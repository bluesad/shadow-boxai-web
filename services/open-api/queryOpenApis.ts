import { client } from '../client';
import { convertPagination } from '../utils';

type Param = Service.Pagination;
type Response = Service.Results<Schema.OpenApi>;

export default function queryOpenApis(param?: Param) {
  return client.get<Response>('open-apis', convertPagination(param));
}
