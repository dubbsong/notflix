import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import TVHeder from 'Components/TVHeader';
import Section from 'Components/Section';
import HPoster from 'Components/HPoster';
import Footer from 'Components/Footer';

const TVPresenter = ({
  loading,
  trending,
  onTheAir,
  popular,
  topRated,
  error
}) =>
  loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <TVHeder />
      {trending && trending.length > 0 && (
        <Section title="Trending TV Shows">
          {trending.map(tv => (
            <HPoster
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              year={tv.first_air_date}
              key={tv.id}
            />
          ))}
        </Section>
      )}
      {onTheAir && onTheAir.length > 0 && (
        <Section title="On The Air">
          {onTheAir.map(tv => (
            <HPoster
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              year={tv.first_air_date}
              key={tv.id}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(tv => (
            <HPoster
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              year={tv.first_air_date}
              key={tv.id}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(tv => (
            <HPoster
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              year={tv.first_air_date}
              key={tv.id}
            />
          ))}
        </Section>
      )}
      <Footer />
    </React.Fragment>
  );

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  trending: PropTypes.array,
  onTheAir: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string
};

export default TVPresenter;
