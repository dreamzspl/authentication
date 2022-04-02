import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        style={styles.input}
        secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faa166',
    width: 300,
    maxWidth: 450,
    borderColor: '#faa166',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;