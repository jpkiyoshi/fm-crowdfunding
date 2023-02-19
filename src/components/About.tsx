import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import ModalProjects from './ModalProjects';
import ProductCard from './ProductCard';

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 0 auto;
	padding: 36px 24px;
	background-color: white;
	border-radius: 10px;
	min-width: 300px;
	width: 45%;
	max-width: 100%;
	text-align: start;
	border: 1px solid var(--border-color);
	transform: translateY(-56px);
	margin-bottom: 45px;

	h2 {
		font-size: 1.2rem;
		margin: 0;
	}

	p {
		font-size: 0.85rem;
		color: var(--dark-gray);
		margin: 0;
		line-height: 1.5;
	}
`;

type Props = {
	setTotalBackers: Dispatch<SetStateAction<number>>;
};

function About({ setTotalBackers }: Props) {
	return (
		<Wrapper>
			<h2>About this project</h2>
			<p>
				The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
				elevates your screen to a more comfortable viewing height. Placing your
				monitor at eye level has the potential to improve your posture and make
				you more comfortable while at work, helping you stay focused on the task
				at hand.
			</p>
			<p>
				Featuring artisan craftsmanship, the simplicity of design creates extra
				desk space below your compute to allow notepads, pens, and USB sticks to
				be stored under the stand.
			</p>
			<ProductCard
				fullWidth
				minPledge={25}
				setTotalBackers={setTotalBackers}
				showButton={true}
				title='Bamboo Stand'
				condition='Pledge $25 or more'
				description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
				productsLeft={101}
			/>
			<ProductCard
				fullWidth
				minPledge={75}
				setTotalBackers={setTotalBackers}
				showButton={true}
				title='Black Edition Stand'
				condition='Pledge $75 or more'
				description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
				productsLeft={64}
			/>
			<ProductCard
				fullWidth
				minPledge={200}
				setTotalBackers={setTotalBackers}
				showButton={true}
				title='Mahogany Special Edition'
				condition='Pledge $200 or more'
				description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'lll be added to our Backer member list. Shipping is included."
				productsLeft={0}
			/>
		</Wrapper>
	);
}
export default About;
