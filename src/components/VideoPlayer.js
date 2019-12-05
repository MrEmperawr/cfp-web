import React from 'react'

function VideoPlayer({currentVideo}) {
    return (
        <>
            {console.log(currentVideo)}
            <iframe 
                src={currentVideo} 
                width="640" 
                height="640"
                frameborder="0" 
                allow="autoplay; fullscreen" 
                allowFullScreen title="movie"
            />
        </>
    )
}

export default VideoPlayer
