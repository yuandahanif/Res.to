/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import API_ENDPOINT from '../globals/api-endpoint';
import { randomStr } from '../utils/random-string';

const randomUserAvatar = () => `${API_ENDPOINT.DICEBEAR_AVATAR(randomStr())}`;
const userAvatar = (id: string) => `${API_ENDPOINT.DICEBEAR_AVATAR(id)}`;

export { randomUserAvatar, userAvatar };
