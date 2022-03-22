import Joke from 'components/Joke';
import { getRandomJoke } from 'features/joke/jokeApi';
import Meta from 'layouts/Meta';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { Container } from 'react-bootstrap';
import DefaultTemplate from 'templates/DefaultTemplate';
import PropTypes from 'prop-types';
import { ROUTES } from 'configs/constants';

const RandomJoke = ({ joke }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
	<DefaultTemplate meta={<Meta title="Joke" description={joke.value} />}>
		<Container>
			<Joke joke={joke} />
		</Container>
	</DefaultTemplate>
);

RandomJoke.propTypes = {
	joke: PropTypes.object,
};

export const getServerSideProps: GetServerSideProps = async () => {
	let joke = await getRandomJoke();

	if (!joke) {
		return {
			// notFound: true,
			redirect: {
				destination: ROUTES.posts,
				permanent: false,
			},
		};
	}

	return {
		props: {
			joke,
		},
	};
};

export default RandomJoke;
