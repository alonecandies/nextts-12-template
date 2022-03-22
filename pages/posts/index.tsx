import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Meta from 'layouts/Meta';
import DefaultTemplate from 'templates/DefaultTemplate';
import { IPost } from 'features/post/post.types';
import { getPosts } from 'features/post/postApi';
import PostCard from 'components/Posts/PostCard';

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getPosts(10);
	return {
		props: {
			posts,
		},
	};
};

const Posts: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<DefaultTemplate meta={<Meta title="Posts page" description="This is posts description" />}>
			<Container>
				{posts.map((post: IPost) => (
					<PostCard key={post.id} post={post} />
				))}
			</Container>
		</DefaultTemplate>
	);
};

Posts.propTypes = {
	posts: PropTypes.array,
};

export default Posts;
