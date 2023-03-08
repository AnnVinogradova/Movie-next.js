
import React from 'react'

export default function Movieup({ selected, closeMovieup }) {
	return <>
		<section className='movieup'>
			<div className='content'>
				<h2>{selected.Title} <span>({selected.Year})</span></h2>
				<p className='rating'>Rating:{selected.imdbRating}</p>
				<div className='plot'>
					<img src={selected.Poster}></img>
					<p>{selected.Plot}</p>
				</div>
				<button className='close' onClick={closeMovieup}>Закрыть</button>
			</div>
		</section>
	</>
}