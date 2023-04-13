import { client } from '../client';

type Param = PartialPick<Schema.Chat, 'sceneId'>;
type Response = Schema.Chat['chatId'];

const createChat: Service.Request<Response, Param> = (param: Param) => client.post('chats', param);
export default createChat;
