import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { ForgotPassword, LoginScreen, Vertication } from '../screens'
import OnbroadingScreen from '../screens/auth/OnbroadingScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();

    // const [isExistingUser, setIsExistingUser] = useState(false);

    // useEffect(()=>{
    //   checkUserExisting();
    // })

   
  
    // const checkUserExisting = async () => {
    //   const res = await AsyncStorage.getItem('auth')
    //   res && setIsExistingUser(true);
    // }
    // console.log(console.log(isExistingUser));
    
    

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      
        <Stack.Screen name='OnbroadingScreen' component={OnbroadingScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} /> 
        <Stack.Screen name='Vertication' component={Vertication} /> 
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} /> 

    </Stack.Navigator>
  )
}

export default AuthNavigator