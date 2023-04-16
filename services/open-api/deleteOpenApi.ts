import { client } from '../client';

type Param = Schema.OpenApi['id'];
type Response = Schema.OpenApi;

const deleteOpenApi: Service.Request<Response, Param> = (id) => client.delete(`open-apis/${id}`);
export default deleteOpenApi;
