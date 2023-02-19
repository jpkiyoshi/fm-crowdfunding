import styled from 'styled-components';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
	background-image: url('src/assets/image-hero-mobile.jpg');
	background-color: var(--dark-gray);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	height: 250px;
	color: white;
	padding: 6px 24px;

	h1 {
		margin: 0;
		font-size: 1.6rem;
	}

	ul {
		display: none;
	}
	@media (min-width: 1440px) {
		padding-inline: 170px;
		background-image: url('src/assets/image-hero-desktop.jpg');

		ul {
			display: flex;
			gap: 20px;
		}

		li {
			list-style-type: none;
		}

		a {
			color: white;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}
	}
`;

type Props = {};
function Header({}: Props) {
	return (
		<StyledHeader>
			<h1>crowdfund</h1>
			<div>
				<Hamburger />
				<ul>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Discover</a>
					</li>
					<li>
						<a href='#'>Get Started</a>
					</li>
				</ul>
			</div>
		</StyledHeader>
	);
}
export default Header;
