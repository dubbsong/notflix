import React from 'react';
import PropTypes from 'prop-types';

const SearchPresenter = ({
  loading,
  searchWord,
  movieResults,
  tvResults,
  error,
  handleSubmit
}) => 'Search Input & Results Area';

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchWord: PropTypes.string,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
