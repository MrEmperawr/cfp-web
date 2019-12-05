import React from 'react'

function MovieCard({name, description, genre, image, selectMovieToPlay}) {
    return (
        <div className="card">
            <img src={image} alt={name}/>
            <div className="card-container">
                <h4 onClick={selectMovieToPlay}><b>{name}</b></h4>
                <p>{description}</p>
                <p>{genre}</p>
            </div>
            <i style={{fontSize: 36}} class="fa">&#xf144;</i>
        </div>
    )
}

export default MovieCard
