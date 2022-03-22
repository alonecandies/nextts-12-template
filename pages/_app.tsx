import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';
import { metaConfig } from 'configs';
import ErrorBoundary from '../layouts/ErrorBoundary/index';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ErrorBoundary>
			<DefaultSeo {...metaConfig} />
			<Component {...pageProps} />
			<ToastContainer
				position="top-right"
				autoClose={1500}
				hideProgressBar
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</ErrorBoundary>
	);
}

export default MyApp;
