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
        const targetName = event.target.id
        const currentMovie = movies
            .find(movie => movie.name === targetName)
        console.log(targetName)
        if (currentMovie) setCurrentVideo(currentMovie.uri)
    }

    useEffect(() => {
        randomMovieSelector(movies)
    }, [])
    return (
        <div>
            <section style={{display: 'flex', justifyContent: 'center', marginRight: 20}}>
                <VideoPlayer currentVideo={currentVideo}/>
            </section>
            <section style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
                {movies.map(movie => 
                    <MovieCard 
                        image="" 
                        name={movie.name} 
                        description={movie.description} 
                        genre={movie.genre}
                        selectMovieToPlay={selectMovieToPlay}
                        key={movie.name}
                    />
                )}
            </section>
        </div>
    )
}

export default Home
