import { client } from '../client';

type Param = Schema.OpenApi['id'];
type Response = Schema.OpenApi;

const getOpenApi: Service.Request<Response, Param> = (id: Param) => client.get(`open-apis/${id}`);
export default getOpenApi;
