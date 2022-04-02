import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Pawmeal-Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign In');

    navigation.navigate('Home');
  }

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');

    navigation.navigate('ForgotPassword');
  }

  const onSignUpPressed = () => {
    console.warn('onSignUpPress');

    navigation.navigate('SignUp');

  }

  return (
    <ScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false} >
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} resizeMode='contain' />
      <CustomInput placeholder='Your name' value={username} setValue={setUsername} />
      <CustomInput placeholder='********' value={password} setValue={setPassword} secureTextEntry />

      <CustomButton text='Sign In' onPress={onSignInPressed} type='Primary' />

      <CustomButton text='Forgot password?' onPress={onForgotPasswordPressed} type='Tertiary' />

      <SocialSignInButtons />

      <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type='Tertiary' />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fcc166',
  },
  logo: {
    width: 200,
    maxWidth: 300,
    maxHeight: 100,
  },
});

export default SignInScreen;