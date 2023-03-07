import React from 'react'

export default function Search({ handleInput }) {
	return (
		<section>
			<input type="text" 
			placeholder='Search for a movie...'
			onChange={handleInput}>
			</input>
		</section>
	)
}