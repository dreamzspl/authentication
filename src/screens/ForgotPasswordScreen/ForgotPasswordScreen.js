import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Pawmeal-Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [ username, setUsername ] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn('onSendPressed');

    navigation.navigate('NewPassword');
  }

  const onSignInPressed = () => {
    console.warn('onSignUpPress');

    navigation.navigate('SignIn');
  }

  return (
    <ScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false} >
    <View>
      <Text style={styles.title}>Reset your password!!!</Text>

      <CustomInput placeholder='Username' value={username} setValue={setUsername} />
      

      <CustomButton text='Send' onPress={onSendPressed} type='Primary' />

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
    backgroundColor: '#fcc166'
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

export default ForgotPasswordScreen;