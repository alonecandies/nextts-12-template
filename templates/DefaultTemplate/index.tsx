import { ReactNode } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';

type IDefaultProps = {
	meta: ReactNode;
	children: ReactNode;
};

const DefaultTemplate = ({ meta, children }: IDefaultProps) => (
	<>
		{meta}
		<Header />
		{children}
		<ScrollToTop />
		<Footer />
	</>
);

export default DefaultTemplate;
