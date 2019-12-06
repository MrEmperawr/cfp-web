import React from 'react'

function MovieCard({name, description, genre, image, selectMovieToPlay}) {
    return (
        <div className="card bg-dark" style={{width: '20rem', margin: '10px 10px 10px 10px'}}>
            <img src={image} alt="" className="card-img-top"/>
            <div className="card-body">
                <h4 className="card-title text-light"><b>{name}</b></h4>
                <p>_</p>
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
