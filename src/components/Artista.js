import React from 'react'

const Artista = ({infoArtista}) => {
    
    if(Object.keys(infoArtista).length===0){return null}

    const { strArtistThumb, strBiographyEN, strGenre } = infoArtista

    return(
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist Information
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist logo"></img>
                <p className="card-text">Genre: {strGenre}</p>
                <h2 className="card-text">Biography</h2>
                <p className="card-text">{strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${infoArtista.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${infoArtista.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${infoArtista.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Artista