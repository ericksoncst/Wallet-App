import React, { ReactNode, useEffect } from 'react' 
import { Container } from './style';
import { Animated, Dimensions } from 'react-native'

type ButtonProp = {
    children:  ReactNode | ReactNode[],
    isLoading?: boolean | false;
}


function BgWrapper(props: ButtonProp) {
  const { children, isLoading } = props;

  const wTest = new Animated.Value(349);
  const hTest = new Animated.Value(235);


  useEffect(() => {
    if(isLoading) {
      Animated.timing(
        wTest, 
        {
          toValue: 450,
          duration: 2000, 
          useNativeDriver: false,
        },
      ).start(); 
      Animated.timing(
        hTest,
        {
          toValue: 303,
          duration: 2000, 
          useNativeDriver: false,
        },
      ).start(); 
    } else {
      Animated.timing(
        wTest,
        {
          toValue: 349,
          duration: 1500, 
          useNativeDriver: false,
        },
      ).start(); 
      Animated.timing(
        hTest,
        {
          toValue: 235,
          duration: 1500, 
          useNativeDriver: false,
        },
      ).start();
    }
  }, [isLoading, hTest, wTest]);

  
  function SquareTop() {
    const h=  235;
    return (
      <Animated.View style={{
        width: wTest, height: hTest, backgroundColor: '#EEEEEE', opacity: 0.2, borderRadius: 50,
        position: 'absolute', top: -h * 0.5, left: -h * 0.3 , transform: [{ rotate: '-25deg' }]
      }} />
    )
  }

  function SquareBottom() {
    const h=  235;
    return (
      <Animated.View style={{
        width: wTest, height: hTest, backgroundColor: '#EEEEEE', opacity: 0.2, borderRadius: 50,
        position: 'absolute', bottom: -h * 0.5, right: -h * 0.3 , transform: [{ rotate: '-25deg' }]
      }} />
    )
  }


  return (
    <Container>
      <SquareTop />
      {children}
      <SquareBottom />
    </Container>
  )
}

export default BgWrapper;