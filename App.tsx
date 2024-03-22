import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { SplashScreen } from './src/screens'
import MainNavigator from './src/navigators/MainNavigator'
import AuthNavigator from './src/navigators/AuthNavigator'

const App = () => {

  const [isShowSplash, setIsShowSplash]=useState(true)

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setIsShowSplash(false)
    }, 1500);
    
  return () => clearTimeout(timeout)

  }, [])

  return (
  <>
    <StatusBar 
      barStyle={'dark-content'} 
      backgroundColor='transparent'
      translucent
    />
    {
      isShowSplash ? <SplashScreen/> : (
        <NavigationContainer>
          <AuthNavigator/>
        </NavigationContainer>
      )
    }
  </>
  )
}

export default App