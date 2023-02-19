import { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import { AmountContext } from '../App';
import ModalThanks from './ModalThanks';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;

	h2 {
		margin: 0 auto;
		font-size: 0.9rem;
		color: var(--dark-gray);
		font-weight: 400;
	}

	div {
		display: flex;
		flex-direction: row;
		gap: 10px;
		position: relative;
		width: 100%;

		input {
			font-weight: bold;
			border-radius: 50px;
			width: 100%;
			border-color: var(--dark-gray);
			padding-left: 14%;
			flex: 1;
		}

		span {
			position: absolute;
			color: var(--dark-gray);
			top: 25%;
			left: 8%;
		}

		button {
			flex: 1;
		}
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
	setTotalBackers: Dispatch<SetStateAction<number>>;
	minPledge: number;
	stockQuantity: number;
	setStockQuantity: Dispatch<SetStateAction<number>>;
};

function PledgeEnter({ setTotalBackers, minPledge, setStockQuantity }: Props) {
	const [amount, setAmount] = useState(0);
	const [value, setValue] = useContext(AmountContext);
	const [show, setShow] = useState(false);
	const handleSubmit = (amount: number) => {
		if (value >= 100000 || amount >= 100000) return;
		if (amount < minPledge) return;
		if (typeof setValue === 'function') setValue(prev => prev + amount);
		setStockQuantity(prev => prev - 1);
		setAmount(0);
		setTotalBackers(prev => prev + 1);
		setShow(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newAmount = Number(e.target.value);
		if (!isNaN(newAmount)) setAmount(newAmount);
	};

	return (
		<Wrapper>
			<h2>Enter your pledge</h2>
			<div>
				<input type='text' value={amount} onChange={handleInputChange} />
				<span>$</span>
				<Button onClick={() => handleSubmit(amount)}>Continue</Button>
			</div>
			<ModalThanks show={show} onClose={() => setShow(false)} />
		</Wrapper>
	);
}
export default PledgeEnter;
