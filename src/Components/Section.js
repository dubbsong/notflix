import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-size: 20px;
  text-shadow: 5px 5px 20px #000000;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  text-shadow: 5px 5px 20px #000000;
  opacity: 0;
`;

const Container = styled.div`
  padding: 0 4%;
  margin-bottom: 20px;

  &:hover {
    ${StyledIcon} {
      opacity: 1;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Top>
      <Title>{title}</Title>
      <StyledIcon icon={faArrowsAltH} />
    </Top>
    <Bottom>{children}</Bottom>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
