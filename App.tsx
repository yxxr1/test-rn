import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/main'
import CreateScreen from './src/screens/create'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={"main"}
            screenOptions={{header: () => null}}>
            <Stack.Screen name="main" component={MainScreen} />
            <Stack.Screen name="create" component={CreateScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
