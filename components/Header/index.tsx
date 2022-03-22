import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from 'configs/constants';
import logo from 'public/assets/images/logo-placeholder.png';
// import styles from "./styles.module.scss";

const Header = () => (
	<header className="bg-dark">
		<Container>
			<Navbar variant="dark">
				<Link href={ROUTES.home} passHref>
					<Navbar.Brand>
						<Image src={logo} height={30} width={100} alt="next-logo" />
					</Navbar.Brand>
				</Link>
				<Link href={ROUTES.home} passHref>
					<Nav.Link>Home</Nav.Link>
				</Link>
				<Link href={ROUTES.about} passHref>
					<Nav.Link>About</Nav.Link>
				</Link>
				<Link href={ROUTES.posts} passHref>
					<Nav.Link>Post</Nav.Link>
				</Link>
				<Link href={ROUTES.randomJoke} passHref>
					<Nav.Link>Jokes</Nav.Link>
				</Link>
			</Navbar>
		</Container>
	</header>
);

export default Header;
