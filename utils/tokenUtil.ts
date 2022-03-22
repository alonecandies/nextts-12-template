import cookies from 'js-cookie';

const tokenUtil = {
	getToken: (): string => {
		return cookies.get('token') || '';
	},
	setToken: (token: string): void => {
		cookies.set('token', token);
	},
	removeToken: (): void => {
		cookies.remove('token');
	},
};

export default tokenUtil;
