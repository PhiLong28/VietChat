import { View, Text, Button, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, InputComponent, SectionComponent, TextComponent, ContainerComponent, SpaceComponent, RowComponent} from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { Lock, Sms, User } from 'iconsax-react-native'
import { Image } from 'react-native'
import SocialLogin from './components/SocialLogin'
import { LoadingModal } from '../../modals'
import authenticationAPI from '../../apis/authApi'
import { Validate } from '../../untils/Validate'

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {

  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading]=useState(false);
  const [errorMessagge, setErrorMessage]=useState('');
  
  useEffect(()=>{
    if(values.email || values.password){
        setErrorMessage('');
    }
  }, [values.email, values.password])


  const handleChangeValue = (key: String, value: String) => {
    const data: any = {...values};

    data[`${key}`] = value;
    setValues(data);
  }

  const handleRegister = async () => {
    const {email, password, confirmPassword}=values
    const emailValidation = Validate.email(email)
    const passValidation = Validate.Password(password)


    if (email && password && confirmPassword) {
      if (emailValidation && passValidation) {
        setErrorMessage('')
        setIsLoading(true)
        try {
          const res = await authenticationAPI.HandleAuthentication(
            '/register', 
            values, 
            'post'
            );
          console.log(res);
          setIsLoading(false)
          
        } catch (error) {
          console.log(error);
          setIsLoading(false)
          
        }
        
      } else {
        setErrorMessage('Email not correct!!!')
      }

    }else{
      setErrorMessage('Vui lòng nhập đầy đủ thông tin!')
    }
      
    
    
    
  }

  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
      
      <SectionComponent>
          <TextComponent size={16} title text='Sign up'/>
          <SpaceComponent height={21}/>
          <InputComponent 
            value={values.username} 
            placeholder='Full name'
            onChange={val => handleChangeValue('username',val)}
            allowClear
            affix={<User size = {22} color={appColors.gray}/>}
          />
          <InputComponent
            value={values.email}
            placeholder="abc@email.com"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
            
          />
          <InputComponent
            value={values.password}
            placeholder="Password"
            onChange={val => handleChangeValue('password', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            
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
      
      {errorMessagge && (
      <SectionComponent>
        <TextComponent text={errorMessagge} color={appColors.danger}/>
      </SectionComponent>
      )}
      
      <SpaceComponent height={16}/>
      <SectionComponent>
        <ButtonComponent onPress={handleRegister} text='SIGN UP' type='primary'/>
      </SectionComponent>
      <SocialLogin/>
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Already have an account? '/>
          <ButtonComponent type='link' text='Sign in' onPress={()=> navigation.navigate('LoginScreen')} />
        </RowComponent>
      </SectionComponent>
      
    </ContainerComponent>
    <LoadingModal  visible={isLoading}/>
    </>
    
  )
}

export default SignUpScreen;