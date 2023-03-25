
export default function Result({ result, openMovieup }) {
	return <>
		<div className='result' onClick={() => openMovieup(result.imdbID)}>
			<img src={result.Poster}></img>
			<h3>{result.Title}</h3>
		</div>
	</>
}