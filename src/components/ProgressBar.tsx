import styled from 'styled-components';

const Wrapper = styled.span`
	height: 12px;
	width: 100%;
	background-color: var(--border-color);
	border-radius: 50px;
	display: block;

	@media (min-width: 1440px) {
		align-self: center;
	}
`;

const Filler = styled.span`
	height: 100%;
	background-color: var(--moderate-cyan);
	border-radius: inherit;
	display: block;
`;

const ProgressBar = ({ completed }: { completed: number }) => {
	return (
		<Wrapper>
			<Filler style={{ width: `${completed}%` }} />
		</Wrapper>
	);
};

export default ProgressBar;
