import { informationConfig } from 'configs';
import styles from './styles.module.scss';

const Footer = () => (
	<footer className={styles.footer}>
		<h1>{informationConfig.phone}</h1>
	</footer>
);

export default Footer;
