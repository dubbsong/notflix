import React from 'react';
import PropTypes from 'prop-types';

const TVPresenter = ({
  loading,
  trending,
  onTheAir,
  popular,
  topRated,
  error
}) => 'TV Shows Area';

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  trending: PropTypes.array,
  onTheAir: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string
};

export default TVPresenter;
