import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Notion from './src/pages/Notion';

const Stack = createNativeStackNavigator();


export default function app() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lodin">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Notion"
          component={Notion}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
