import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container, 
      styles[`button${type}`],
      bgColor ? { backgroundColor : bgColor } : {}
      ]}>
      <Text style={[
        styles.text, 
        styles[`text${type}`],
        fgColor ? { color : fgColor } : {}
        ]}>{text}</Text> 
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxWidth: 450,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#ff4040',
    borderRadius: 5,
  },
  buttonSecondary: {
    borderColor: '#ff4040',
    borderWidth: 2,
  },  
  buttonTertiary: {
    
  },
  textPrimary: {
    fontWeight: 'bold',
    color: 'white',
  },
  textSecondary: {
    color: '#ff4040',
  },  
  textTertiary: {
    color: '#333',
  }
});

export default CustomButton;