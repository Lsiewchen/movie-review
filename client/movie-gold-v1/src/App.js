import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

//Serve as 'main'/'root' component.
//Contains core logic, routes, state management and the UI structure (such as layouts, headers, footers, etc.) of your app.
function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  const getMovies = async() => {  //'async' auto offload tasks to Web APIs (in the browser) or Node.js APIs (in Node.js) to be processed independently of the main thread.
    try {
      const response = await api.get("/api/v1/movies"); //'await' ensures that a operation completes before the next line of code runs.
      setMovies(response.data);
    }
    catch {
      console.log("error")
    }
  }

  const getMovieData = async(movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`); // `` for string interpolation ${}
      setMovie(response.data);
      setReviews(response.data.reviewIds);
      console.log(response.data.reviewIds);
    }
    catch(error) {
      console.error(error);
    }
  }

  useEffect(() => { getMovies() },[]);  //empty dependencies array meant that the function is called once after initial render

  return (
    <div className="App">
      <Header/>
      <Routes> {/*holds all the individual route definitions*/}
        <Route path="" element={<Layout />}> {/*defines which component to render for that path*/}
          <Route path="" element={<Home movies = {movies} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route> {/*React Router will treat the URL after ':' as a parameter that can be accessed later in the component using the useParams() hook*/}
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
