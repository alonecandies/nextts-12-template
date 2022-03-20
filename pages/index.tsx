import Meta from 'layouts/Meta';
import type { NextPage } from 'next';
import DefaultTemplate from 'templates/DefaultTemplate';
const Home: NextPage = () => {
	return (
		<DefaultTemplate meta={<Meta title="Home Page" description="This is description" />}>
			<h1>Home Page</h1>
		</DefaultTemplate>
	);
};

export default Home;
