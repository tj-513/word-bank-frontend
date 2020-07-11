import React from 'react';
import { Text, View, Image } from 'react-native';

const HomeHeader = () => (
  <View>
    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>
      Word Bank
    </Text>
    <View>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 75, height: 75, alignSelf: 'center' }}
      />
    </View>
  </View>
);

export default HomeHeader;
