import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from 'assets/logo_sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faThumbsUp,
  faThumbsDown,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

const Logo = styled.img`
  width: 20px;
  position: absolute;
  top: 8px;
  left: 3px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: top center;
  width: var(--h_width);
  height: var(--h_height);
`;

const HoverContent = styled.div`
  opacity: 0;

  @media (max-width: 576px) {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 0 2px;
  transition: 0.2s all;

  &:hover {
    transform: scale(var(--h_scale));
    margin: 0 25px;

    ${Image} {
      opacity: 0.4;
    }

    ${HoverContent} {
      opacity: 1;
    }
  }
`;

const LeftContent = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

const StyledIconLeft = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

const Title = styled.h4`
  font-size: 14px;
  margin: 10px 0 5px;
  text-shadow: 5px 5px 20px #141414;
`;

const Year = styled.p`
  font-size: 10px;
`;

const RightContent = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;

  @media (max-width: 576px) {
    display: none;
  }
`;

const StyledIconRight = styled(FontAwesomeIcon)`
  display: block;
  margin-top: 8px;
  font-size: 12px;
`;

const HPoster = ({ id, imageUrl, title, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <ImageContainer>
      <Logo src={logo} alt="" />
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
            : require('../assets/no_h_poster.png')
        }
      />
      <HoverContent>
        <LeftContent>
          <StyledIconLeft icon={faPlayCircle} />
          <Title>
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Title>
          <Year>{year.substring(0, 4)}</Year>
        </LeftContent>
        <RightContent>
          <StyledIconRight icon={faThumbsUp} />
          <StyledIconRight icon={faThumbsDown} />
          <StyledIconRight icon={faPlus} />
        </RightContent>
      </HoverContent>
    </ImageContainer>
  </Link>
);

HPoster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default HPoster;
