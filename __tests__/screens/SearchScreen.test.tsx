import React from 'react';
import {render} from '@testing-library/react-native';
import SearchScreen from '../../src/screens/SearchScreen';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<SearchScreen>', () => {
  it('should render without errors', () => {
    const {getByTestId} = render(<SearchScreen />);
    const component = getByTestId('SearchScreen');
    expect(component).toBeDefined();
  });
});
