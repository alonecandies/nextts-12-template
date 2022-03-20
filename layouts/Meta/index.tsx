import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { metaConfig } from '../../configs/metaConfig';

type IMetaProps = {
	title: string;
	description: string;
	canonical?: string;
};

const Meta = (props: IMetaProps) => (
	<>
		<Head>
			<meta charSet="UTF-8" key="charset" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			<meta httpEquiv="Cache-Control" content="max-age=31536000, must-revalidate" />
		</Head>
		<NextSeo
			{...metaConfig}
			title={props.title}
			description={props.description}
			canonical={props.canonical}
			openGraph={{
				url: props.canonical,
				title: props.title,
				description: props.description,
			}}
		/>
	</>
);

export default Meta;
