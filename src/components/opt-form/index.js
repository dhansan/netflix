import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

export default function OptForm({ children, ...restPorps }) {
  return <Container {...restPorps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restPorps }) {
  return <Input {...restPorps} />;
};

OptForm.Button = function OptFormButton({ children, ...restPorps }) {
  return (
    <Button {...restPorps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restPorps }) {
  return <Text {...restPorps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restPorps }) {
  return <Break {...restPorps} />;
};
