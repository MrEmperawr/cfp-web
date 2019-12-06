import React from 'react'

function MovieCard({name, description, genre, image, selectMovieToPlay}) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={image} alt={name} className="card-img-top"/>
            <div className="card-body">
                <h4 onClick={selectMovieToPlay} className="card-title"><b>{name}</b></h4>
                <p>{description}</p>
                <p>{genre}</p>
            </div>
            <i style={{fontSize: 36, flexDirection: 'flex-'}} class="fa">&#xf144;</i>
        </div>
    )
}

export default MovieCard
