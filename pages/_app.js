import Header from '../component/Header'
import "../stylus/style.css";

export default function MyApp({ Component, pageProps }) {
	return <>
		<Header />
		<Component {...pageProps} />
	</>
}