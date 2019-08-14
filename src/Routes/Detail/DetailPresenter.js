import React from 'react';
import PropTypes from 'prop-types';

const DetailPresenter = ({ loading, result, error }) => 'Each Detail Area';

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.object,
  error: PropTypes.string
};

export default DetailPresenter;
