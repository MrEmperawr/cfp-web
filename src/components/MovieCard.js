import React from 'react'

function MovieCard({name, description, genre, image, selectMovieToPlay}) {
    return (
        <div className="card flex-item bg-dark card-container" style={{width: '20rem', margin: '10px 10px 10px 10px'}}>
            <div className="card-body">
                <img src={image} alt="" className="img"/>
                <h4 className="card-title text-light"><b>{name}</b></h4>
                <br/>
                <p className="card-text text-light">{description}</p>
            </div>
            <p className="text-secondary">{genre}</p>
            <button className="btn btn-secondary" id={name} onClick={selectMovieToPlay}>
                <i 
                    style={{fontSize: 36, flexDirection: 'flex-'}} 
                    className="fa"
                    onClick={selectMovieToPlay}
                    id={name}
                >
                        &#xf144;
                </i>
            </button>
        </div>
    )
}

export default MovieCard
