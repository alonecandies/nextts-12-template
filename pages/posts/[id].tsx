import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import PropTypes from 'prop-types';
import { getPostById, getPostIds } from 'features/post/postApi';
import DefaultTemplate from 'templates/DefaultTemplate';
import Meta from 'layouts/Meta';
import { Container } from 'react-bootstrap';
import PostDetail from 'components/Posts/PostDetail';

interface IParams extends NextParsedUrlQuery {
	id: string;
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<DefaultTemplate meta={<Meta title={post.title} description={post.body} />}>
			<Container>
				<PostDetail post={post} />
			</Container>
		</DefaultTemplate>
	);
};

Post.propTypes = {
	post: PropTypes.object,
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getPostIds(10);
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const { id } = context.params as IParams;
	const post = await getPostById(id);

	return {
		props: {
			post,
		},
		revalidate: 1,
	};
};

export default Post;
