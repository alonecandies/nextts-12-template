import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { IPost } from 'features/post/post.types';
import Link from 'next/link';
import { ROUTES } from 'configs/constants';
import { FaAngleLeft } from 'react-icons/fa';

type Props = {
	post: IPost;
};

const PostDetail = ({ post }: Props) => {
	return (
		<>
			<Link href={ROUTES.posts} passHref>
				<Button
					variant="dark"
					className="d-flex justify-content-center align-items-center mt-3"
					style={{width: 'fit-content'}}
				>
					<span>Back</span>
					<FaAngleLeft></FaAngleLeft>
				</Button>
			</Link>
			<Card className="my-3 shadow">
				<Card.Title>{post.title}</Card.Title>
				<Card.Text>{post.body}</Card.Text>
			</Card>
		</>
	);
};

PostDetail.propTypes = {
	post: PropTypes.object,
};

export default PostDetail;
