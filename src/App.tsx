import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import About from './components/About';
import Header from './components/Header';
import ProductIntro from './components/ProductIntro';
import ProgressInfo from './components/ProgressInfo';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Commissioner', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: hsl(0, 0, 98%);

  --moderate-cyan: hsl(176, 50%, 47%);
  --dark-cyan: hsl(176, 72%, 28%);
  --black: hsl(0, 0%, 0%);
  --dark-gray: hsl(0, 0%, 48%);
  --border-color: hsl(0, 0%, 90%);
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export const AmountContext = createContext<
	Array<
		| number
		| Dispatch<SetStateAction<number>>
		| boolean
		| Dispatch<SetStateAction<boolean>>
	>
>([0]);

const AmountProvider = ({ children }: { children: React.ReactNode }) => {
	const [amount, setAmount] = useState(0);
	const [show, setShow] = useState(false);
	const value = [amount, setAmount, show, setShow];
	return <AmountContext.Provider value={value}>{children}</AmountContext.Provider>;
};

function App() {
	const [totalBackers, setTotalBackers] = useState(0);

	return (
		<main>
			<AmountProvider>
				<GlobalStyles />
				<Header />
				<ProductIntro setTotalBackers={setTotalBackers} />
				<ProgressInfo totalBackers={totalBackers} />
				<About setTotalBackers={setTotalBackers} />
			</AmountProvider>
		</main>
	);
}

export default App;
