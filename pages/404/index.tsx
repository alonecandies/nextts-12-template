import { Container, Row } from 'react-bootstrap';
import DefaultTemplate from 'templates/DefaultTemplate';
import Meta from 'layouts/Meta';

const NotFound = () => {
	return (
		<DefaultTemplate meta={<Meta title="Page not found" description="Page not found" />}>
			<Container className="mt-3 mb-3">
				<Row>
					<h1 className="text-center">Page not found</h1>
				</Row>
			</Container>
		</DefaultTemplate>
	);
};

export default NotFound;
