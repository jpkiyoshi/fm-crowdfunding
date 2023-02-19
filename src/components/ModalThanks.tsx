import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalStyles = styled.div<Props>`
	position: fixed;
	background-color: hsl(0, 0%, 0%, 0.5);
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	display: ${props => (props.show ? 'flex' : 'none')};
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 75%;
	background-color: white;
	padding: 28px;
	text-align: center;
	border-radius: 10px;
	gap: 25px;

	h2 {
		font-size: 1.2rem;
		margin: 0;
	}

	p {
		font-size: 0.9rem;
		color: var(--dark-gray);
		margin: 0;
		line-height: 1.5;
	}
`;

const Button = styled.button`
	border-radius: 50px;
	padding: 0;
	font-weight: bold;
	border: 0;
	cursor: pointer;
	background-color: var(--moderate-cyan);
	color: white;
	padding: 15px 32px;

	&:hover {
		background-color: var(--dark-cyan);
	}
`;

type Props = {
	show: boolean;
	onClose?: () => void;
};

function ModalThanks({ show, onClose }: Props) {
	return createPortal(
		<ModalStyles onClick={onClose} show={show}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<div>
					<img src='src/assets/icon-check.svg' />
				</div>
				<h2>Thanks for your support!</h2>
				<p>
					Your pledge brings us one step closer to sharing Mastercraft Bamboo
					Monitor Riser worlwide. You will get an email once our campaign is
					completed.
				</p>
				<Button onClick={onClose}>Got it!</Button>
			</ModalContent>
		</ModalStyles>,
		document.body
	);
}
export default ModalThanks;
