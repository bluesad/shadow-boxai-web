import { client } from '../client';

type Params = [Service.Pagination?];
type Response = Service.Results<Schema.Chat>;

const queryChats: Service.Request<Response, Params> = (param: Params[0]) =>
  client.get('chats', param);
export default queryChats;
