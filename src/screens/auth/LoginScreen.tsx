import { View, Text, Button, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, InputComponent, SectionComponent, TextComponent, ContainerComponent, SpaceComponent, RowComponent} from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { Lock, Sms } from 'iconsax-react-native'
import { Image } from 'react-native'
import SocialLogin from './components/SocialLogin'
import { err } from 'react-native-svg'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import authenticationAPI from '../../apis/authApi'
import { Validate } from '../../untils/Validate'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'

const LoginScreen = ({navigation}: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const dispach = useDispatch();

  const handleLogin = async () => {

    //Rang buoc dieu kien email phai nhap dung moi thuc hien
    const emailValidation = Validate.email(email);
    if (emailValidation) {
      try {
        const res = await authenticationAPI.HandleAuthentication('/login', {email, password}, 'post');
        dispach(addAuth(res.data))
       
        await AsyncStorage.setItem('auth', isRemember ? JSON.stringify(res.data) : email);

      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Email is not correct!!!')
    }


  }
  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent 
      styles={{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 25,
      }}>
        <Image 
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 270,
            height: 114,
            marginBottom: 20,
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
              onPress={()=> navigation.navigate('ForgotPassword')}
              type='text'
            />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent onPress={handleLogin} text='SIGN IN' type='primary'/>
      </SectionComponent>
      <SocialLogin/>
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Dont have an account? '/>
          <ButtonComponent 
          type='link' 
          text='Sign up' 
          onPress={()=> navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default LoginScreen