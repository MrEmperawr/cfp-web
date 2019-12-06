import React from 'react'
import Iframe from 'react-iframe'

function VideoPlayer({currentVideo}) {
    return (
        <div style={{width: '80%'}}>
            <div className="embed-responsive embed-responsive-21by9">
                <iframe 
                    className="embed-responsive-item"
                    src={currentVideo} 
                    frameBorder="0" 
                    allowFullScreen 
                    title="documentary"
                />
            </div>
        </div>
    )
}

export default VideoPlayer
