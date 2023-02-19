import { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import { AmountContext } from '../App';
import ModalProjects from './ModalProjects';

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 0 auto;
	padding: 36px 24px;
	background-color: white;
	border-radius: 10px;
	transform: translateY(-15%);
	min-width: 300px;
	width: 45%;
	max-width: 85%;
	text-align: center;
	border: 1px solid var(--border-color);
	margin-bottom: 45px;

	h2 {
		font-size: 1.38rem;
		margin: 0;
		margin-top: 20px;
	}

	p {
		font-size: 0.9rem;
		color: var(--dark-gray);
		margin: 0;
	}

	div {
		display: flex;
		gap: 10px;
		justify-content: space-between;
	}

	@media (min-width: 1440px) {
		margin-bottom: 30px;
	}
`;

const Logo = styled.img`
	position: absolute;
	top: -10%;
	left: 50%;
	transform: translateX(-50%);
`;

const Button = styled.button`
	border-radius: 50px;
	padding: 0;
	font-weight: bold;
	border: 0;
	cursor: pointer;
	max-width: 200px;
	height: 50px;
`;

const ButtonText = styled(Button)`
	background-color: var(--moderate-cyan);
	color: white;
	flex: 2;

	&:hover {
		background-color: var(--dark-cyan);
	}
`;

const ButtonIcon = styled(Button)`
	p {
		display: none;
	}
	@media (min-width: 1440px) {
		display: flex;
		align-items: center;
		padding-right: 30px;

		p {
			display: initial;
			transform: translateX(10px);
			font-weight: bold;
		}
	}
`;

type Props = {
	setTotalBackers: Dispatch<SetStateAction<number>>;
};
function ProductIntro({ setTotalBackers }: Props) {
	const [bookmarked, setBookmarked] = useState(false);
	const [, , show, setShow] = useContext(AmountContext);

	function isBooleanSetter(fn: any): fn is Dispatch<SetStateAction<boolean>> {
		return typeof fn === 'function';
	}

	return (
		<Wrapper>
			<Logo src='src/assets/logo-mastercraft.svg' />
			<h2>Mastercraft Bamboo Monitor Riser</h2>
			<p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
			<div>
				<ButtonText
					onClick={() => {
						if (isBooleanSetter(setShow)) setShow(true);
					}}
				>
					Back this project
				</ButtonText>
				<div onClick={() => setBookmarked(!bookmarked)}>
					<ButtonIcon>
						<svg width='56' height='56' xmlns='http://www.w3.org/2000/svg'>
							<g fill='' fillRule='evenodd'>
								<circle
									fill={bookmarked ? 'var(--dark-cyan)' : '#2F2F2F'}
									cx='28'
									cy='28'
									r='28'
								/>
								<path
									fill={bookmarked ? 'white' : '#B1B1B1'}
									d='M23 19v18l5-5.058L33 37V19z'
								/>
							</g>
						</svg>
						{bookmarked ? (
							<p style={{ color: 'var(--dark-cyan)' }}>Bookmarked</p>
						) : (
							<p>Bookmark</p>
						)}
					</ButtonIcon>
				</div>
			</div>
			<ModalProjects
				show={show as boolean}
				onClose={() => {
					if (isBooleanSetter(setShow)) setShow(false);
				}}
				setTotalBackers={setTotalBackers}
			/>
		</Wrapper>
	);
}
export default ProductIntro;
