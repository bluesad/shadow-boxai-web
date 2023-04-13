import { client } from '../client';

type Param = Schema.Chat['id'];
type Response = Schema.Chat;

const deleteChat: Service.Request<Response, Param> = (id) => client.delete(`chats/${id}`);
export default deleteChat;
