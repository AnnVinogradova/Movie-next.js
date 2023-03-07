import React from 'react'
import Result from './Result'

export default function Results({ results }) {
	return <>
		<div className='results'>
			{results.map(result => (
				<Result key={result.imdbID} result={result} />
			))}
		</div>
	</>
}