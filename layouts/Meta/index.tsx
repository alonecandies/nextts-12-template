import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { metaConfig } from 'configs';

type IMetaProps = {
	title: string;
	description: string;
	canonical?: string;
};

const Meta = (props: IMetaProps) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta httpEquiv="Cache-Control" content="max-age=31536000, must-revalidate" />
				<link rel="manifest" href={`${router.basePath}/site.webmanifest`} />
				<link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
				<link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href={`${router.basePath}/android-chrome-192x192.png`}
					key="android"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href={`${router.basePath}/android-chrome-512x512.png`}
					key="android-512"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${router.basePath}/favicon-32x32.png`}
					key="favicon32"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${router.basePath}/favicon-16x16.png`}
					key="favicon16"
				/>
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
};

export default Meta;
