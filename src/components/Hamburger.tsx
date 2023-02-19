import { useState } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';

const StyledHamburger = styled.img`
	cursor: pointer;

	@media (min-width: 1440px) {
		display: none;
	}
`;

type Props = {};
function Hamburger({}: Props) {
	const [show, setShow] = useState(false);

	return (
		<div>
			<StyledHamburger
				onClick={() => setShow(true)}
				src={`${
					show === false
						? 'src/assets/icon-hamburger.svg'
						: 'src/assets/icon-close-menu.svg'
				}`}
			/>
			<MobileMenu show={show} onClose={() => setShow(false)} />
		</div>
	);
}
export default Hamburger;
