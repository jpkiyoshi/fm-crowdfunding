import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AmountContext } from '../App';
import ProgressBar from './ProgressBar';

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin: 0 auto;
	padding: 36px 24px;
	background-color: white;
	border-radius: 10px;
	transform: translateY(-21%);
	min-width: 300px;
	width: 45%;
	max-width: 85%;
	text-align: center;
	border: 1px solid var(--border-color);

	@media (min-width: 1440px) {
		margin-bottom: 50px;
	}
`;

const TextInfo = styled.div`
	p {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
		margin-bottom: 5px;
	}

	span {
		font-size: 0.8rem;
		color: var(--dark-gray);
	}

	@media (min-width: 1440px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const ContentDivider = styled.span`
	border-top: 1px solid var(--border-color);
	display: block;
	width: 30%;
	margin-block: 20px;
	margin-inline: auto;

	@media (min-width: 1440px) {
		border-top: none;
		border-right: 1px solid var(--border-color);
		height: 100%;
		margin: 0;
		width: initial;
		transform: translateY(-90%);
	}
`;

type Props = {
	totalBackers: number;
};

export default function ProgressInfo({ totalBackers }: Props) {
	const [value] = useContext(AmountContext);

	return (
		<Wrapper>
			<TextInfo>
				<div>
					<div>
						<p>${value.toLocaleString()}</p>
						<span>of $100,000 backed</span>
					</div>
					<ContentDivider />
				</div>
				<div>
					<div>
						<p>{totalBackers}</p>
						<span>total backers</span>
					</div>
					<ContentDivider />
				</div>
				<div>
					<p>56</p>
					<span>days left</span>
				</div>
			</TextInfo>
			<ProgressBar completed={((value as number) / 100000) * 100} />
		</Wrapper>
	);
}
