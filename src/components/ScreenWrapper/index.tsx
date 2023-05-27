import React, { ReactElement, ReactNode } from 'react';
import { Container } from './style';

interface Props {
    children: ReactElement | ReactNode;
}

function ScreenWrapper(props: Props) {
  const { children } = props;

  return <Container>{children}</Container>
}

export default ScreenWrapper;
