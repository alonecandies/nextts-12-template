import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import 'styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { metaConfig } from 'configs/metaConfig';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...metaConfig} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
