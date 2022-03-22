import axios from 'axios';
import { IPost } from './post.types';

export const getPosts = async (limit: number) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getPostIds = async (limit: number) => {
	const posts: IPost[] = await getPosts(limit);

	return posts.map((post) => ({
		params: {
			id: `${post.id}`,
		},
	}));
};

export const getPostById = async (id: string) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
