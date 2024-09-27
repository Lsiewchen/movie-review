import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {

    const navigate = useNavigate(); //a hook that returns a navigate function
    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`); //then use the function to perform navigation
    }

  return (
    <div className = 'movie-carousel-container'>
        <Carousel>
            {
                movies.map((movie) => {
                    return(
                        <Paper key={movie.id}>
                            <div className = 'movie-card-container'>
                                <div className = 'movie-card' style={{"--img":`url(${movie.backdrops[0]})`}}> {/*CSS custom property, start with '--' to create a CSS variable, `` to embed js expressions inside a string*/}
                                    <div className = 'movie-detail'>
                                        <div className = 'movie-poster'>
                                            <img src={movie.poster} alt="" />
                                        </div>
                                        <div className = 'movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className = 'movie-buttons-container'>
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <div className ='play-button-icon-container'>
                                                    <FontAwesomeIcon className = 'play-button-icon'
                                                        icon = {faCirclePlay}
                                                    />
                                                </div>
                                            </Link>
                                            <div className = 'movie-review-button-container'>
                                                <Button variant="info" onClick={() => reviews(movie.imdbId)}>Reviews</Button> {/*onClick needs a function reference that it can execute later when the user clicks the button,
                                                                                                                                'reviews()' is a function call while 'reviews' is a function reference,
                                                                                                                                since we need to pass a parameter to the function, we need to add () => to make it a function reference*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero