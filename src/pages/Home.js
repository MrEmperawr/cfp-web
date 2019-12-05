import React, { useState } from 'react'

import { movies } from '../utils/movies'
import VideoPlayer from '../components/VideoPlayer'

function Home() {
    const [currentVideo, setCurrentVideo] = useState('https://player.vimeo.com/video/97210026')
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
