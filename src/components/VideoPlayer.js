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
            {/* <Iframe url={currentVideo}
            width="640px"
            height="640px"
            position="absolute"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
            /> */}
        </div>
    )
}

export default VideoPlayer
