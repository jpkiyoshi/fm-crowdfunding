import { Dispatch, SetStateAction, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ModalStyles = styled.div<Props>`
	position: fixed;
	background-color: hsl(0, 0%, 0%, 0.5);
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	display: ${props => (props.show ? 'flex' : 'none')};
	overflow: auto;
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	max-width: 750px;
	background-color: white;
	padding-block: 36px;
	text-align: start;
	align-items: center;
	border-radius: 10px;
	gap: 25px;
	transform: translateY(30%);

	p {
		font-size: 0.8rem;
		color: var(--dark-gray);
		margin: 0;
		line-height: 1.5;
		text-align: start;
	}
`;

const TitleStyles = styled.section`
	display: flex;
	flex-direction: column;
	width: 80%;
	gap: 20px;
`;

type Props = {
	show: boolean;
	onClose?: () => void;
	setTotalBackers: Dispatch<SetStateAction<number>>;
};

function ModalProjects({ show, onClose, setTotalBackers }: Props) {
	return createPortal(
		<ModalStyles setTotalBackers={setTotalBackers} onClick={onClose} show={show}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<TitleStyles>
					<h2>Back this project</h2>
					<p>
						Want to support us in bringing Mastercraft Bamboo Monitor Riser
						out in the world?
					</p>
				</TitleStyles>
				<ProductCard
					showRadioButton
					minPledge={1}
					setTotalBackers={setTotalBackers}
					smallText={true}
					showButton={false}
					title='Pledge with no reward'
					condition=''
					description='Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
					productsLeft={-1}
				/>
				<ProductCard
					showRadioButton
					minPledge={25}
					setTotalBackers={setTotalBackers}
					smallText={true}
					showButton={false}
					title='Bamboo Stand'
					condition='Pledge $25 or more'
					description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
					productsLeft={101}
				/>
				<ProductCard
					showRadioButton
					minPledge={75}
					setTotalBackers={setTotalBackers}
					smallText={true}
					showButton={false}
					title='Black Edition Stand'
					condition='Pledge $75 or more'
					description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
					productsLeft={64}
				/>
				<ProductCard
					showRadioButton
					minPledge={200}
					setTotalBackers={setTotalBackers}
					smallText={true}
					showButton={false}
					title='Mahogany Special Edition'
					condition='Pledge $200 or more'
					description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'lll be added to our Backer member list. Shipping is included."
					productsLeft={0}
				/>
			</ModalContent>
		</ModalStyles>,
		document.body
	);
}
export default ModalProjects;
