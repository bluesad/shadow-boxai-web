import { client } from '../client';

type Param = Schema.Chat['chatId'];
type Response = Service.Results<Schema.ChatMessage>;

const queryChatMessages: Service.Request<Response, Param> = (param: Param) =>
  client.get(`chats/${param}/messages`);
export default queryChatMessages;
