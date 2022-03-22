import type { NextPage } from 'next';
import Meta from 'layouts/Meta';
import DefaultTemplate from 'templates/DefaultTemplate';
import { Container } from 'react-bootstrap';

const About: NextPage = () => {
	return (
		<DefaultTemplate meta={<Meta title="About page" description="This is about description" />}>
			<Container>
				<h1 className="text-center">About page</h1>
			</Container>
		</DefaultTemplate>
	);
};

export default About;
