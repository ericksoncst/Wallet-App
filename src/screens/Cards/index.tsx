import * as React from 'react';
import { View, Text } from 'react-native';
import {
  useQuery,
} from 'react-query'
import axios from 'axios'

type CardRepo = {
  cvv: string ;
  id: string ;
  name : string;
  number : string;
}




function Cards() {

  const { isLoading, error, data } = useQuery<CardRepo[]>('cards', async () => {
    const response = await axios.get('http://192.168.0.40:3001/cards')
    return response.data as CardRepo[]
  }, {staleTime: 1000 * 60})

  
  if (isLoading) return <Text>{'Loading...'}</Text>
  console.log(data)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cards</Text>
    </View>
  );
}

export default Cards
