import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Pawmeal-Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordRepeat, setPasswordRepeat ] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn('Register');
    
    navigation.navigate('ConfirmEmail');
  }

  const onSignInPressed = () => {
    console.warn('onSignInPress');

    navigation.navigate('SignIn');
  }

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  }

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  }

  return (
    <ScrollView contentContainerStyle={styles.root}  showsVerticalScrollIndicator={false} >
    <View>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput placeholder='Your name' value={username} setValue={setUsername} />
      <CustomInput placeholder='yourname@email.com' value={email} setValue={setEmail} />
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
      <CustomInput placeholder='Repeat password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />

      <CustomButton text='Register' onPress={onRegisterPressed} type='Primary' />

      <Text style={styles.text}>By registering you confirm that you accept our <Text onPress={onTermsOfUsePressed} style={styles.link}>Terms of Use</Text> and <Text onPress={onPrivacyPressed} style={styles.link}>Privacy Policy</Text></Text>

      <SocialSignInButtons />

      <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type='Tertiary' />

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
    maxHeight: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
  },
  text: {
    color: 'gray',
    maxWidth: 300,
    marginVertical: 10,
  },
  link: {
    color: '#ff4040',
  },
});

export default SignUpScreen;