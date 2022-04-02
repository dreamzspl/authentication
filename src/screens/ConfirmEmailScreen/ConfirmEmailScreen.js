import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Pawmeal-Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [ code, setCode ] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn('onConfirmPressed');

    navigation.navigate('Home');
  }

  const onSignInPressed = () => {
    console.warn('onSignInPress');

    navigation.navigate('SignIn');
  }

  const onResendPressed = () => {
    console.warn('onResendPressed');
  }

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  }

  return (
    <ScrollView contentContainerStyle={styles.root}  showsVerticalScrollIndicator={false} >
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput placeholder='Enter your confirmation code' value={code} setValue={setCode} />
      

      <CustomButton text='Confirm' onPress={onConfirmPressed} type='Primary' />

      <CustomButton text="Resend Code" onPress={onResendPressed} type='Secondary' />

      <CustomButton text="Back to Sign in" onPress={onSignInPressed} type='Tertiary' />

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

export default ConfirmEmailScreen;