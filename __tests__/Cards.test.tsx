/**
 * @format
 */
import { render} from '@testing-library/react-native';
import 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import { CardList } from '../src/screens/Cards/CardList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

const wrapper = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const cardMock = [{
  cardNumber: '**** **** **** 9673',
  cardCvv: '123',
  cardName: 'Ericksongs ',
  cardExpiration: '06/25',
  id: 'u5x5AoP'
}]

describe('CardList', () => {
  test('Test cards list componens', async () => {
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockResolvedValue(cardMock)

    const {getByText, findByText} = render(<CardList cards={cardMock} />, {
      wrapper,
    });

    await findByText(cardMock[0].cardName);

    expect(getByText(`Validade ${cardMock[0].cardExpiration}`)).toBeTruthy();
    expect(getByText(cardMock[0].cardName)).toBeTruthy();
    expect(getByText(cardMock[0].cardNumber)).toBeTruthy();

  });
});