import { client } from '../client';

interface Param {
  id: number;
  data: PartialPick<Schema.OpenApi, 'proxyUrl' | 'proxyPort' | 'maximumReq' | 'status'>;
}
type Response = boolean;

const updateOpenApi: Service.Request<Response, Param> = (param: Param) =>
  client.patch(`open-apis/${param.id}`, param.data);
export default updateOpenApi;
