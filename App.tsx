import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import {RootStackParams} from './src/types/navigation';

const Stack = createStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({title: route.params.showName})}
      />
    </Stack.Navigator>
  );
};

export const App = () => {
  return <NavigationContainer>{RootStack()}</NavigationContainer>;
};

export default App;
