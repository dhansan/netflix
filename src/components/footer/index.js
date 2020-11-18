import React from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

export default function Footer({ children, ...restPorps }) {
  return <Container {...restPorps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restPorps }) {
  return <Row {...restPorps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restPorps }) {
  return <Column {...restPorps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restPorps }) {
  return <Link {...restPorps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restPorps }) {
  return <Title {...restPorps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restPorps }) {
  return <Text {...restPorps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restPorps }) {
  return <Break {...restPorps}>{children}</Break>;
};
