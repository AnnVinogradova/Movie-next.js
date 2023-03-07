import React, { useState } from 'react'
import axios from 'axios'
import Search from "../component/Search"


export default function HomePage() {
	const [state, setState] = useState({
		s: "",
		results: [],
		selected: {}
	});
	const apiUrl = 'http://www.omdbapi.com/?apikey=31157fe';

	const search = (evt) => {
		if (evt.key === "Enter") {
			axios(apiUrl + "&s=" + state.s).then(({ data }) => {
				console.log(data);
				let results = data.Search;
				setState(prevState => {
					return { ...prevState, results: results }
				})
			});
		}

	}
	const handleInput = (evt) => {
		let s = evt.target.value;

		setState(prevState => {
			return { ...prevState, s: s }
		});
	};

	return <>
		<main>
			<Search handleInput={handleInput} search={search} />
		</main>
	</>
}