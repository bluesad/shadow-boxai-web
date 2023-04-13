import { JSEncrypt } from 'jsencrypt';

let encryptor: JSEncrypt;

/*****************************************************************************
 * Using async function to avoid running on server render
 *****************************************************************************/
export async function getEncryptor() {
  if (encryptor != null) return encryptor;

  encryptor = new (await import('jsencrypt')).default();
  encryptor.setPublicKey(process.env.NEXT_PUBLIC_ENCRYPT_KEY!);

  return encryptor;
}

export async function encrypt(value: string) {
  return (await getEncryptor()).encrypt(value);
}
