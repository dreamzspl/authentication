import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


// import SignInScreen from './src/screens/SignInScreen/';
// import SignUpScreen from './src/screens/SignUpScreen/';
// import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/';
// import NewPasswordScreen from './src/screens/NewPasswordScreen/';

import Navigation from './src/navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>

    // SafeAreaView doesn't work
    // <SafeAreaView style={styles.root}>
    //   <Navigation />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fcc166',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
