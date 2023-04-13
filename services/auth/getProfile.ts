import { client } from '../client';

const getProfile: Service.Request<Schema.User> = () => client.get('auth/profile');
export default getProfile;
