import React, { ReactElement, ReactNode } from 'react' 
import { Container, CornerBottom, CornerTop } from './style';

type ButtonProp = {
    children: ReactElement | ReactNode
}

function BgWrapper(props: ButtonProp) {
  const { children } = props;
    
  return (
    <Container>
      {/* <CornerTop /> */}
      {children}
      {/* <CornerBottom /> */}
    </Container>
  )
}

export default BgWrapper;