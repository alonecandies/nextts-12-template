import { FaAngleUp } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function ScrollToTop() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<div className={styles['scroll-to-top-btn']}>
			<FaAngleUp onClick={scrollToTop} />
		</div>
	);
}
