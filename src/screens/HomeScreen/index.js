import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center',
    justifyContent: 'center', }}>
      <Text style={{ fontSize: 24, alignSelf: 'center' }}>Home sweet home</Text>
    </View>
  );
};

export default Home;