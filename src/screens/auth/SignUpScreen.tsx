import { View, Text, Button, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, InputComponent, SectionComponent, TextComponent, ContainerComponent, SpaceComponent, RowComponent} from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { Lock, Sms } from 'iconsax-react-native'
import { Image } from 'react-native'
import SocialLogin from './components/SocialLogin'

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {

  const [values, setValues] = useState(initValue);
  
  const handleChangeValue = (key: String, value: String) => {
    const data: any = {...values};

    data[`${key}`] = value;
    setValues(data);
  }
  return (
    <ContainerComponent isImageBackground isScroll back>
      
      <SectionComponent>
          <TextComponent size={16} title text='Sign up'/>
          <SpaceComponent height={21}/>
          <InputComponent 
            value={values.username} 
            placeholder='Full name'
            onChange={val => handleChangeValue('username',val)}
            allowClear
            affix={<Sms size = {22} color={appColors.gray}/>}
          />
          <InputComponent 
            value={values.email} 
            placeholder='abc@email.com'
            onChange={val => handleChangeValue('email',val)}
            allowClear
            affix={<Lock size = {22} color={appColors.gray}/>}
          />
          <InputComponent 
            value={values.email} 
            placeholder='Your password'
            onChange={val => handleChangeValue('email',val)}
            isPassword
            allowClear
            affix={<Lock size = {22} color={appColors.gray}/>}
          />
          <InputComponent 
            value={values.confirmPassword} 
            placeholder='Confirm password'
            onChange={val => handleChangeValue('confirmPassword',val)}
            isPassword
            allowClear
            affix={<Lock size = {22} color={appColors.gray}/>}
          />
          
      </SectionComponent>
      <SpaceComponent height={16}/>
      <SectionComponent>
        <ButtonComponent text='SIGN UP' type='primary'/>
      </SectionComponent>
      <SocialLogin/>
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Already have an account? '/>
          <ButtonComponent type='link' text='Sign in' onPress={()=> navigation.navigate('LoginScreen')} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default SignUpScreen;