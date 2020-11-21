import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ children, ...restPorps }) {
  return <Container {...restPorps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restPorps }) {
  return <Title {...restPorps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restPorps }) {
  return <SubTitle {...restPorps}>{children}</SubTitle>;
};
