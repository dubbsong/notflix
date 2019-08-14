import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import MovieHeader from 'Components/MovieHeader';

const MoviePresenter = ({
  loading,
  trending,
  nowPlaying,
  topRated,
  upcoming,
  error
}) =>
  loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <MovieHeader />
    </React.Fragment>
  );

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  trending: PropTypes.array,
  nowPlaying: PropTypes.array,
  topRated: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string
};

export default MoviePresenter;
