import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import VPoster from 'Components/VPoster';

const Container = styled.div``;

const Form = styled.form`
  padding: 80px 4% 0;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 20px;
  margin-left: 8px;
`;

const SearchPresenter = ({
  loading,
  searchWord,
  movieResults,
  tvResults,
  error,
  handleSubmit,
  updateWord
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <StyledIcon icon={faSearch} />
      <Input
        placeholder="Search by word..."
        value={searchWord}
        onChange={updateWord}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <VPoster
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(tv => (
              <VPoster
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.name}
                year={tv.first_air_date}
                key={tv.id}
              />
            ))}
          </Section>
        )}
      </React.Fragment>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchWord: PropTypes.string,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateWord: PropTypes.func.isRequired
};

export default SearchPresenter;
