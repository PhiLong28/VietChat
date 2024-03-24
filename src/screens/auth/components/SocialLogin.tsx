
import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontfamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svgs'


const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent 
        styles={{textAlign: 'center'}}
        text='OR' 
        color={appColors.gray4} 
        font={fontfamilies.medium}
      />
      <SpaceComponent height={20}/>
      <ButtonComponent 
      type='primary'
      color={appColors.white}
      textColor={appColors.text}
      text='Login with Google' 
      textFont={fontfamilies.regular}
      iconFlex='left' 
      icon={<Google/>}
      />
      <ButtonComponent 
      type='primary'
      color={appColors.white}
      textColor={appColors.text}
      text='Login with Facebook' 
      textFont={fontfamilies.regular}
      iconFlex='left' 
      icon={<Facebook/>}
      />
    </SectionComponent>
  )
}

export default SocialLogin