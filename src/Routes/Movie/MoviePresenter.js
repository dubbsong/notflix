import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import MovieHeader from 'Components/MovieHeader';
import Section from 'Components/Section';
import HPoster from 'Components/HPoster';
import Footer from 'Components/Footer';
import Message from 'Components/Message';
import Helmet from 'react-helmet';

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
      <Helmet>
        <title>Movies | Notflix</title>
      </Helmet>
      <MovieHeader />
      {trending && trending.length > 0 && (
        <Section title="Trending Movies">
          {trending.map(movie => (
            <HPoster
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              isMovie={true}
              key={movie.id}
            />
          ))}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <HPoster
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              isMovie={true}
              key={movie.id}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(movie => (
            <HPoster
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              isMovie={true}
              key={movie.id}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
            <HPoster
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              isMovie={true}
              key={movie.id}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e50914" />}
      <Footer />
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
