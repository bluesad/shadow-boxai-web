import { client } from '../client';

type Params = [Service.Pagination?];
type Param = Params[0];
type Response = Service.Results<Schema.Chat>;

const queryChats: Service.Request<Response, Param> = (param: Param) =>
  client.get<Response>('chats', param);
export default queryChats;
