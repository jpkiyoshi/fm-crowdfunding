import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledMobileMenu = styled.div<Props>`
	position: fixed;
	background-color: hsl(0, 0%, 0%, 0.3);
	inset: 0;
	display: flex;
	align-items: flex-start;
	padding-top: 65px;
	justify-content: center;
	display: ${props => (props.show ? 'flex' : 'none')};
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 90%;
	background-color: white;
	border-radius: 10px;
	overflow: hidden;

	li {
		list-style-type: none;
	}

	a {
		display: inline-block;
		text-decoration: none;
		color: black;
		font-weight: 500;
		padding: 20px;
	}

	li:not(:last-of-type)::after {
		content: '';
		border: 1px solid var(--border-color);
		transform: rotate(180deg);
		display: block;
		width: 100vw;
	}
`;

type Props = {
	show: boolean;
	onClose?: () => void;
};

function MobileMenu({ show, onClose }: Props) {
	return createPortal(
		<StyledMobileMenu onClick={onClose} show={show}>
			<ModalContent onClick={e => e.stopPropagation()}>
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
			</ModalContent>
		</StyledMobileMenu>,
		document.body
	);
}
export default MobileMenu;
