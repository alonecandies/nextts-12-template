import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Loading from 'components/Loading';

type IDefaultProps = {
	meta: ReactNode;
	children: ReactNode;
};

const DefaultTemplate = ({ meta, children }: IDefaultProps) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loading />;
	}

	return (
		<>
			{meta}
			<Header />
			{children}
			<ScrollToTop />
			<Footer />
		</>
	);
};

export default DefaultTemplate;
