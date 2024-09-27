import React from 'react'
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import { useEffect, useRef } from 'react';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef(); //to store a value (like a var), and when that value changes, it does not trigger a re-render of the component
    const movieId = useParams().movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [])

    const addReview = async(e) => {
        e.preventDefault();

        const rev = revText.current.value;
        const revData = {
            reviewBody: rev,
            imdbId: movieId
        };

        try {
            await api.post("/api/v1/reviews", revData) //second parameter is the data that will be sent in the body of the POST request to the API
            const updatedReviews = [...reviews, {body: rev}];
            revText.current.value = ""; //since this reference the actual DOM element <textarea>, we can directly set the value of the textarea from parent component
            console.log(updatedReviews);
            setReviews(updatedReviews);
        }
        catch(error) { //to capture the error as 'error' variable
            console.error(error); //console.error - logs the error in a red colored font
        }
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>            
        </Row>
        <Row className = 'mt-2'>
            <Col><img src={movie.poster} alt="" /></Col>
            <Col>
                {
                    <> {/*fragement - for grouping without adding unnecessary elements, need to be within {} as it is javascript code*/}
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr /> {/*horizontal line*/}
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => { {/*'?' optional chaining - ensures code doesn't break, if reviews is null or undefined it does not execute .map()*/}
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews