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
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <section style={{width: '75%'}}>
                <h3 style={{marginBottom: 100, marginTop: 50}}>Vi producerar högkvalitativa informationsfilmer till ett bra pris.</h3>
                <section style={{display: 'flex', justifyContent: 'center', marginRight: 20, marginBottom: 20}}>
                    <VideoPlayer currentVideo={currentVideo}/>
                </section>
                <section className="flex-container">
                    {movies.map(movie => 
                        <MovieCard 
                            image={movie.image} 
                            name={movie.name} 
                            description={movie.description} 
                            genre={movie.genre}
                            selectMovieToPlay={selectMovieToPlay}
                            key={movie.name}
                        />
                    )}
                </section>
            </section>
        </div>
    )
}

export default Home
