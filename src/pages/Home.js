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

    useEffect(() => {
        randomMovieSelector(movies)
    }, [])
    return (
        <div>
            <VideoPlayer currentVideo={currentVideo}/>
            {movies.map(movie => 
                <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row'}}>
                    <li key={movie.name}>
                        {movie.name}
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Home
