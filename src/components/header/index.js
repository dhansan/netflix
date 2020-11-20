import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, ButtonLink, Container, Logo } from './styles/header';

export default function Header({ bg = true, children, ...restPorps }) {
  return bg ? <Background {...restPorps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restPorps }) {
  return <Container {...restPorps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restPorps }) {
  return <ButtonLink {...restPorps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restPorps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restPorps} />
    </ReactRouterLink>
  );
};
