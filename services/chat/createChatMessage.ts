import { client } from '../client';

interface Param {
  chatId: string;
  data: string;
}

type Response = Schema.ChatMessage['chatMsgId'];

const createChatMessage: Service.Request<Response, Param> = (param) =>
  client.post(`chats/${param.chatId}/messages`, { message: param.data });
export default createChatMessage;
