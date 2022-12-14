import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchMoviesAsynch,
  getAllMovies,
} from '../../features/Movies/MoviesSlice';

import MovieDetails from '../MovieDetails/MovieDetails';
// import MovieDetails from '../MovieDetails/MovieDetails';

import Show from '../shows/Show';
import './Home.css';

const Home = () => {
  const state = useSelector(getAllMovies);
  console.log('selector:', state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsynch());
  }, [dispatch]);

  return (
    <>
      <div></div>
      <div className='movies'>
        {state?.Search?.map((item) => {
          return (
            <>
              <Link to={`/movie/${item.imdbID}`}>
                <div>
                  <img src={item.Poster} alt='' />
                  <h4>{item.Title}</h4>
                  <h4>{item.Year}</h4>
                  <MovieDetails data={state} key={item.imdbID} />
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <h1>Shows</h1>
      <Show />
    </>
  );
};

export default Home;
