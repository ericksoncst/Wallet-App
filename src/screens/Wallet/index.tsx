import React, { useRef } from 'react';
import { Animated, FlatList, View } from 'react-native';
import {
  useQuery,
} from 'react-query'
import BgWrapper from '../../components/Background';
import TabScreen from '../../components/Tab';
import { getAllCards } from '../../services';
import { WalletCard } from './WalletCard';

interface Card {
  id: string;
  cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;
}

export const Wallet = () => {

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  const useLazyRef = <T extends object>(initializer: () => T) => {
    const ref = useRef<T>();
    if (ref.current === undefined) {
      ref.current = initializer();
    }
    return ref.current;
  };


  const y = useLazyRef(() => new Animated.Value(0));
  const onScroll = useLazyRef(() =>
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: { y },
          },
        },
      ],
      { useNativeDriver: true }
    )
  );

  const { data: cards, isLoading } = useQuery('cards', async () : Promise<Card[]> => {
    const response = await getAllCards();
    return response;
  }, {staleTime: 1000 * 60});

  return (
    <BgWrapper isLoading={isLoading}>
      <TabScreen />
      <View style={{ flex: 1, justifyContent: 'center', marginTop: '10%'}}>
        <AnimatedFlatList
          scrollEventThrottle={16}
          bounces={false}
          {...{ onScroll }}
          data={cards}
          renderItem={({ index, item }) => (
            <WalletCard {...{ index, y,item }} />
          )}
          keyExtractor={(item) => `${item?.index}`}
        />
      </View>
    </BgWrapper>
  );
}