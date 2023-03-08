import React from 'react'
import Result from './Result'

export default function Results({ results, openMovieup }) {
	return <>
		<section className='results'>
			{results.map(result => (
				<Result key={result.imdbID} result={result} openMovieup={openMovieup} />
			))}
		</section>
	</>
}