import React, { useState, useEffect } from 'react'

import { movies } from '../utils/movies'
import VideoPlayer from '../components/VideoPlayer'

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
            {movies.map(movie => 
                <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row'}}>
                    <li key={movie.name} onClick={selectMovieToPlay}>
                        {movie.name}
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Home
