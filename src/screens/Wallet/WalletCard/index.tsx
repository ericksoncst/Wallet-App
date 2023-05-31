import React from 'react';
import { Animated, Dimensions, StyleSheet, Text } from 'react-native';
import { maskCreditCard } from '../../../helpers';

const ratio = 228 / 362;

const MARGIN = 16;
const {  height } = Dimensions.get('window');
const CARD_WIDTH = 300 * 0.8;
const DEFAULT_CARD_HEIGHT = CARD_WIDTH * ratio;
const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;

const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: 'center',
    backgroundColor: '#cecece',
    width: 300,
    borderRadius: 16,
    height: 180,
    paddingLeft: 15
  },
});

  interface WalletCardProps {
      y: Animated.Value;
      index: number;
      item: object
    }

export const WalletCard = ({  y, index, item }: WalletCardProps)  => {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  return (
    <Animated.View
      style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
      key={index}
    >
      <Text style={{fontSize: 20,
        fontWeight: 400,
        marginBottom: 30
      }}>White Card</Text>
      <Text style={{fontWeight: 400, fontSize: 16 }}>{item.cardName}</Text>
      <Text style={{fontWeight: 400, fontSize: 16 }}>{maskCreditCard(item.cardNumber)}</Text>
      <Text style={{fontWeight: 400, fontSize: 16 }}>{item.cardExpiration}</Text>
    </Animated.View>
  );
  
}