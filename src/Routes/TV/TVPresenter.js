import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import TVHeder from 'Components/TVHeader';

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
