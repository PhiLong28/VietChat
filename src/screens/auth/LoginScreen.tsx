import { View, Text, Button, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, InputComponent, SectionComponent, TextComponent, ContainerComponent, SpaceComponent, RowComponent} from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { Lock, Sms } from 'iconsax-react-native'
import { Image } from 'react-native'
import SocialLogin from './components/SocialLogin'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent 
      styles={{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 75,
      }}>
        <Image 
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 270,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
          <TextComponent size={16} title text='Sign in'/>
          <SpaceComponent height={21}/>
          <InputComponent 
            value={email} 
            placeholder='Email'
            onChange={val => setEmail(val)}
            allowClear
            affix={<Sms size = {22} color={appColors.gray}/>}
          />
          <InputComponent 
            value={password} 
            placeholder='Password'
            onChange={val => setPassword(val)}
            isPassword
            allowClear
            affix={<Lock size = {22} color={appColors.gray}/>}
          />
          <RowComponent justify='space-between'>
            <RowComponent onPress={()=> setIsRemember(!isRemember)}>
              <Switch 
                  trackColor={{true : appColors.primary}}
                  thumbColor={appColors.white}
                  value={isRemember}
                  onChange={() => setIsRemember(!isRemember)}
                />
                <TextComponent styles={{marginRight: 50}} text='Remember me'/>
            </RowComponent>
            <ButtonComponent 
              text='Forgot Password?'
              onPress={()=>{}}
              type='text'
            />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent text='SIGN IN' type='primary'/>
      </SectionComponent>
      <SocialLogin/>
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Dont have an account? '/>
          <ButtonComponent type='link' text='Sign up' />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default LoginScreen