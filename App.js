
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './src/Splash';
import HomePage from './src/Components/HomePage';
import IndividualRes from './src/Components/IndividualRes';
import Scanner from './src/Components/Scanner';
import SelectedRes from './src/Components/SelectedRes';
import PositiveScreen from './src/Components/PositiveScreen';
import SuccessScreen from './src/Components/SuccessScreen';

const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Splash}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="IndividualRes" component={IndividualRes} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="SelectedRes" component={SelectedRes} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="PositiveScreen" component={PositiveScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
