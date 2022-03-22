import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ROUTES } from 'configs/constants';
import { IJoke } from 'features/joke/joke.types';

type Props = {
	joke: IJoke;
};

const Joke = ({ joke }: Props) => {
	return (
		<>
			<Link href={ROUTES.home} passHref>
				<Button
					variant="dark"
					className="d-flex justify-content-center align-items-center mt-3"
					style={{ width: 'fit-content' }}
				>
					<span>Back</span>
					<FaAngleLeft></FaAngleLeft>
				</Button>
			</Link>
			<Card className="my-3 shadow">
				<Card.Body>
					<Card.Title>A random joke</Card.Title>
					<Card.Text>{joke.value}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

Joke.propTypes = {
	post: PropTypes.object,
};

export default Joke;
