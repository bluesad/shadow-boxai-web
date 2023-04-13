import { Status, UserRole } from '@/const/enum';

declare global {
  namespace Schema {
    interface User {
      id: number;
      username: string;
      displayName: string;
      password: string;
      mobile: string;
      email: string;
      inviteCode: string;
      isAdmin: UserRole;
      lastLoginIp: string;
      lastLoginTime: string;
      registerTime: string;
      registerFrom: string;
      updateTime: string;
      status: Status;
    }

    interface OpenApi {
      id: number;
      apiKey: string;
      maximumReq: number;
      proxyPort: number;
      proxyUrl: string;
      source: string;
      status: Status;
      keyDesc: string;
      createTime: string;
      updateTime: string;
    }

    interface Label {
      id: number;
      labelName: string;
    }

    interface Chat {
      id: number;
      chatId: string;
      chatName: string;
      accountCost: number;
      openAiCost: number;
      promptCount: number;
      responseCount: number;
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
      status: Status;
      sceneId?: number;
      sceneName?: string;
      creatorId: number;
      updateTime: string;
      createTime: string;
    }

    interface ChatMessage {
      id: number;
      chatMsgId: string;
      prompt: string;
      response: string;
    }

    interface SceneMessage {
      id: number;
      sceneChatMessages: {
        id: number;
        key: string;
        value: string;
      }[];
    }
  }
}
