import React, { useState } from 'react'
import axios from 'axios'
import Search from "../component/Search"
import Results from "../component/Results"
import Movieup from "../component/Movieup"

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
	}

	const openMovieup = id => {
		axios(apiUrl + "&i=" + id).then(({ data }) => {
			let result = data;

			
			setState(prevState => {
				return { ...prevState, selected: result }
			});
		});
	}

	const closeMovieup = () => {
		setState(prevState => {
			return { ...prevState, selected: {} }
		});
	}

	return <>
		<main>
			<Search handleInput={handleInput} search={search} />
			<Results results={state.results} openMovieup={openMovieup} />
			{(typeof state.selected.Title != "undefined") ? <Movieup selected={state.selected} closeMovieup={closeMovieup} /> : false}
		</main>
	</>
}