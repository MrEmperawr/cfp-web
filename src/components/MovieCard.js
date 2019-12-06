import React from 'react'

function MovieCard({name, description, genre, image, selectMovieToPlay}) {
    return (
        <div className="card" style={{width: '20rem', margin: '10px 10px 10px 10px'}}>
            <img src={image} alt="" className="card-img-top"/>
            <div className="card-body">
                <h4 onClick={selectMovieToPlay} className="card-title"><b>{name}</b></h4>
                <p className="card-text">{description}</p>
            </div>
            <p style={{bottom: 0}}>{genre}</p>
            <button className="btn btn-primary">
                <i style={{fontSize: 36, flexDirection: 'flex-'}} class="fa">&#xf144;</i>
            </button>
        </div>
    )
}

export default MovieCard
