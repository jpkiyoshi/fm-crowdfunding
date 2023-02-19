import { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import { AmountContext } from '../App';
import PledgeEnter from './PledgeEnter';

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 10px;
	padding: 24px 24px;
	background-color: white;
	border-radius: 10px;
	max-width: 85%;
	text-align: center;
	border: 1px solid var(--border-color);
	text-align: start;

	h3 {
		margin: 0;
		font-size: 0.9rem;
	}

	h3 ~ span {
		font-size: 0.8rem;
		color: var(--moderate-cyan);
		font-weight: 500;
	}

	div p {
		color: black;
		font-weight: bold;
		font-size: 2rem;
	}

	div p ~ span {
		color: var(--dark-gray);
	}

	div:has(p) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 6px;
	}
`;

const TitleStyles = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 80%;
	gap: 10px;

	div:has(h3) {
		gap: 5px;
	}
`;

const Button = styled.button`
	border-radius: 50px;
	font-weight: bold;
	border: 0;
	cursor: pointer;
	padding: 15px 5px;
	width: 75%;
`;

const ButtonText = styled(Button)`
	background-color: var(--moderate-cyan);
	color: white;

	&:hover {
		background-color: var(--dark-cyan);
	}
`;

const RadioButton = styled.button<{ isSelected: boolean }>`
	position: relative;
	width: 25px;
	height: 25px;
	border-radius: 50px;
	background-color: #fff;
	border: 1px solid var(--border-color);
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 12px;
		height: 12px;
		border-radius: 150px;
		background-color: ${props =>
			props.isSelected ? 'var(--moderate-cyan)' : 'transparent'};
	}
`;

const HorizontalRule = styled.hr`
	width: calc(100% + 50px);
	transform: translateX(-25px);
`;

type Props = {
	title: string;
	condition: string;
	description: string;
	productsLeft: number;
	showButton: boolean;
	smallText?: boolean;
	setTotalBackers: Dispatch<SetStateAction<number>>;
	minPledge: number;
	showRadioButton?: boolean;
	fullWidth?: boolean;
};

function ProductCard({
	title,
	condition,
	description,
	productsLeft,
	showButton,
	smallText,
	setTotalBackers,
	minPledge,
	showRadioButton,
	fullWidth,
}: Props) {
	const [isSelected, setIsSelected] = useState(false);
	const [stockQuantity, setStockQuantity] = useState(productsLeft);
	const [, , , setShow] = useContext(AmountContext);

	function isBooleanSetter(fn: any): fn is Dispatch<SetStateAction<boolean>> {
		return typeof fn === 'function';
	}

	return (
		<Wrapper
			style={{
				opacity: productsLeft !== 0 ? 1 : 0.3,
				borderColor: isSelected ? 'var(--moderate-cyan)' : '',
				maxWidth: fullWidth ? '100%' : '',
			}}
		>
			<TitleStyles>
				{showRadioButton && (
					<div>
						<RadioButton
							onClick={() => {
								if (stockQuantity === 0) return;
								setIsSelected(!isSelected);
							}}
							isSelected={isSelected}
						/>
					</div>
				)}

				<div>
					<h3>{title}</h3>
					<span>{condition}</span>
				</div>
			</TitleStyles>
			<p>{description}</p>
			{productsLeft >= 0 && (
				<div>
					<p style={{ fontSize: smallText ? '1rem' : '' }}>{stockQuantity}</p>
					<span>left</span>
				</div>
			)}

			{showButton && (
				<ButtonText
					onClick={() => {
						if (isBooleanSetter(setShow)) setShow(true);
					}}
					style={{ backgroundColor: productsLeft > 0 ? '' : 'black' }}
				>
					{productsLeft > 0 ? 'Select Reward' : 'Out of Stock'}
				</ButtonText>
			)}
			{isSelected && (
				<>
					<HorizontalRule />
					<PledgeEnter
						setTotalBackers={setTotalBackers}
						minPledge={minPledge}
						stockQuantity={stockQuantity}
						setStockQuantity={setStockQuantity}
					/>
				</>
			)}
		</Wrapper>
	);
}
export default ProductCard;
