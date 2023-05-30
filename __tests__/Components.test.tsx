/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BgWrapper from '../src/components/Background';
import TabScreen from '../src/components/Tab';
import Button from '../src/components/Button';
import HeaderLeft from '../src/components/HeaderLeft';
import HeaderRight from '../src/components/HeaderRight';
import Input from '../src/components/Input';
import ScreenWrapper from '../src/components/ScreenWrapper';

describe('All components', () => {
  test('renders bg component', () => {
    renderer.create(<BgWrapper><TabScreen/></BgWrapper>);
  });

  test('renders tab component', () => {
    renderer.create(<TabScreen/>);
  });

  test('renders screen wrapper component', () => {
    renderer.create(<ScreenWrapper><TabScreen /></ScreenWrapper>);
  });
  
  test('renders button component', () => {
    renderer.create(<Button color='#FFF' title='test' disabled={false} textColor='#000' handlePress={()=>{}} />);
  });
  
  test('renders header left component', () => {
  
    renderer.create(<HeaderLeft marginTop={0} />);
  });
  
  test('renders header right component', () => {
  
    renderer.create(<HeaderRight />);
  });
  
  test('renders input component', () => {
  
    renderer.create(<Input handleChange={()=> {}} label={'teste'} />);
  });
})
