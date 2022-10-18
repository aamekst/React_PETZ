import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Signin from '../screens/Signin';
import SignUp from '../screens/SignUp';



const Stack = createStackNavigator();

export default() => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
         headerShown: false
    
        }}
        
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      
 
       
    </Stack.Navigator>
);