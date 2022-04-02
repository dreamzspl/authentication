import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {

  const onSignInFacebook = () => {
    console.warn('Facebook');
  }

  const onSignInGoogle = () => {
    console.warn('Google');
  }
  
  return (
    <>
      <CustomButton text='Sign In with Facebook' onPress={onSignInFacebook} type='Primary' bgColor='#e7eaf4' fgColor='#4765a9' />

      <CustomButton text='Sign In with Google' onPress={onSignInGoogle} type='Primary' bgColor='#fae9ea' fgColor='#dd4d44' />
    </> 
  )
}

export default SocialSignInButtons;
