import { render, fireEvent, act } from '@testing-library/react-native';
import 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Form from '../src/screens/Form';

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

jest.mock('axios', () => {
  return {
    post: jest.fn()
  };
});

describe('Render Form', () => {
  it('should not trigger error for correct values on card name', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cName'), 'Erickson Teste');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
      
    expect(queryByTestId('errcName')).not.toBeTruthy();

  });

  it('should not trigger error for correct values on card number', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cNumber'), '4576010001019673');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
      
    expect(queryByTestId('errcNumber')).not.toBeTruthy();
  });

  it('should not trigger error for correct values on card cvv', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cCvv'), '123');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
      
    expect(queryByTestId('errcSubmit')).not.toBeTruthy();
  });

  it('should not trigger error for correct values on card expiration', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cExpiration'), '03/25');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
    
    expect(queryByTestId('errcExpiration')).not.toBeTruthy();
   
  });

  it('should trigger error for invalid values on card name', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cName'), 'Er');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
      
    expect(queryByTestId('errcName')).toBeTruthy();

  });

  it('should trigger error for wrong values on card number', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cNumber'), '45760');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
      
    expect(queryByTestId('errcNumber')).toBeTruthy();
  });

  it('should not trigger error for wrong values on card cvv', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cCvv'), '12');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
      
    expect(queryByTestId('errcCvv')).toBeTruthy();
  });

  it('should  trigger error for wrong values on card expiration', async () => {
    const { getByTestId, queryByTestId } = render(<Form />, {
      wrapper,
    });
      
    fireEvent.changeText(getByTestId('cExpiration'), '44/25');
      
    await act(async () => {
      fireEvent.press(getByTestId('cSubmit'));
    });
    
    expect(queryByTestId('errcExpiration')).toBeTruthy();

  });
});