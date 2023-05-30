import axios, { AxiosResponse } from 'axios';
import { addCard, getAllCards } from '../src/services';

jest.mock('axios', () => {
  return {get: jest.fn(), post: jest.fn()}
});

describe('get cards', () => {
  test('should return cards list', async () => {    
    const cards = [
      {
        'id': '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
        'cardNumber': '3529 5435 3355 222',
        'cardCvv': '317',
        'cardName': 'John Doe mock',
        'cardExpiration': '15/12/2030'
      },
      {
        'cardNumber': '457601000101444',
        'cardCvv': '123',
        'cardName': 'Ericksongs mock',
        'cardExpiration': '06/25',
        'id': 'u5x5AoP'
      }
    ]
    
    const mockedResponse: AxiosResponse = {
      data: cards,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };    

    axios.get.mockResolvedValueOnce(mockedResponse);    
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getAllCards();
    
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(cards);
  });

  test('should add card on list', async () => {    
    const card = {
      'cardNumber': '3333 2222 3355 222',
      'cardCvv': '317',
      'cardName': 'John Doe mock Post',
      'cardExpiration': '15/12/2030'
    }
    
    const mockedResponse: AxiosResponse = {
      data: card,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };    

    axios.post.mockResolvedValueOnce(mockedResponse);    
    expect(axios.post).not.toHaveBeenCalled();
    const data = await addCard(card);

    
    expect(axios.post).toHaveBeenCalled();
    expect(data).toEqual(mockedResponse);
  });
});