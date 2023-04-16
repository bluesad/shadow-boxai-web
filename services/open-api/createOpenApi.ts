import { client } from '../client';

type Param = RequiredPick<Schema.OpenApi, 'apiKey' | 'maximumReq' | 'source'> &
  PartialPick<Schema.OpenApi, 'proxyUrl' | 'proxyPort'>;
type Response = Schema.OpenApi['id'];

const createOpenApi: Service.Request<Response, Param> = (param: Param) =>
  client.post('open-apis', param);
export default createOpenApi;
