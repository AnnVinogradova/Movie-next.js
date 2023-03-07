import React from 'react'

export default function Search({ handleInput, search }) {
	return <>
		<section>
			<input type="text"
				placeholder='Search for a movie...'
				onChange={handleInput}
				onKeyDown={search}>
			</input>
		</section>
	</>
}