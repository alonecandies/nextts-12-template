import type { NextPage } from 'next';
import Meta from 'layouts/Meta';
import DefaultTemplate from 'templates/DefaultTemplate';
import { Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import { ROUTES } from 'configs/constants';

const Home: NextPage = () => {
	return (
		<DefaultTemplate meta={<Meta title="Home Page" description="This is home description" />}>
			<Container>
				<h1 className="text-center">Home Page</h1>
				<Link href={ROUTES.posts} passHref>
					<Button variant="primary">Posts</Button>
				</Link>
			</Container>
		</DefaultTemplate>
	);
};

export default Home;
