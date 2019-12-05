import React, { useState, useEffect } from 'react'

import { movies } from '../utils/movies'
import VideoPlayer from '../components/VideoPlayer'
import MovieCard from '../components/MovieCard'

function Home() {
    const [currentVideo, setCurrentVideo] = useState()
    const randomMovieSelector = (movies) => {
        const length = movies.length
        const index = Math.floor(Math.random() * length)
        setCurrentVideo(movies[index].uri)
    }
    const selectMovieToPlay = (event) => {
        const targetName = event.target.innerText
        const currentMovie = movies
            .find(movie => movie.name === targetName)
        console.log(currentMovie)
        setCurrentVideo(currentMovie.uri)
    }

    useEffect(() => {
        randomMovieSelector(movies)
    }, [])
    return (
        <div>
            <VideoPlayer currentVideo={currentVideo}/>
            <section style={{display: 'flex'}}>
                {movies.map(movie => 
                    <MovieCard 
                        image="" 
                        name={movie.name} 
                        description={movie.description} 
                        genre={movie.genre}
                        selectMovieToPlay={selectMovieToPlay}
                    />
                    // <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row'}}>
                    //     <li key={movie.name} onClick={selectMovieToPlay}>
                    //         {movie.name}
                    //     </li>
                    // </ul>
                )}
            </section>
        </div>
    )
}

export default Home
