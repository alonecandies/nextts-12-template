import { Card } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { IPost } from 'features/post/post.types';
import { ROUTES } from 'configs/constants';

type Props = {
	post: IPost;
};

const PostCard = ({ post }: Props) => {
	return (
		<Card className="my-3 shadow">
			<Card.Title>{post.title}</Card.Title>
			<Card.Text>{post.body}</Card.Text>
			<Link href={`${ROUTES.posts}/${post.id}`} passHref>
				<Card.Link>Read more</Card.Link>
			</Link>
		</Card>
	);
};

PostCard.propTypes = {
	post: PropTypes.object,
};

export default PostCard;
