import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import logo from 'assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0 4%;
  z-index: 10;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 90px;
`;

const List = styled.ul`
  display: flex;
  margin-left: 10px;
`;

const Item = styled.li`
  width: 68px;
  height: 68px;
  text-align: center;
  margin-left: 8px;
  color: ${props => (props.current ? '#ffffff' : '#b3b3b3')};

  &:last-child {
    width: 50px;
  }

  @media (max-width: 576px) {
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ffffff;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Nav>
    <StyledLink to="/">
      <Logo src={logo} alt="" />
    </StyledLink>
    <List>
      <Item current={pathname === '/'}>
        <StyledLink to="/">Movies</StyledLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <StyledLink to="/tv">TV Shows</StyledLink>
      </Item>
      <Item current={pathname === '/search'}>
        <StyledLink to="/search">
          <StyledIcon icon={faSearch} />
        </StyledLink>
      </Item>
    </List>
  </Nav>
));
