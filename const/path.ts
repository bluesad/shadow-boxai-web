import { join } from '@/utils/path';

export const SEGMENT = {
  HOME: '/',
  LOGIN: 'login',
  CHAT: 'chat',
  SETTING: 'setting',
} as const;

export const PARAM = {
  CHAT_ID: 'chatId',
} as const;

export const LOGIN = join(SEGMENT.HOME, SEGMENT.LOGIN);

export const CHAT = join(SEGMENT.HOME, SEGMENT.CHAT);
export const CHAT_DETAIL = join(CHAT, `:${PARAM.CHAT_ID}`);

export const SETTING = join(SEGMENT.HOME, SEGMENT.SETTING);

export const HOME = SEGMENT.HOME;
