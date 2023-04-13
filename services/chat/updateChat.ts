import { client } from '../client';

interface Param {
  id: Schema.Chat['id'];
  data: PartialPick<Schema.Chat, 'chatName'>;
}
type Response = boolean;

const updateOpenApi: Service.Request<Response, Param> = (param: Param) =>
  client.patch(`chats/${param.id}`, param.data);
export default updateOpenApi;
