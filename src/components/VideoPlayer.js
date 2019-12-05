import React from 'react'
import Iframe from 'react-iframe'

function VideoPlayer({currentVideo}) {
    return (
        <div class="iframe-container">
            {console.log(currentVideo)}
            <iframe 
                src={currentVideo} 
                frameBorder="0" 
                allowFullScreen 
                title="documentary"
            />
        </div>
    )
}

export default VideoPlayer
