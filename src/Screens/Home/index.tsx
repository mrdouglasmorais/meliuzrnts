import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.default}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
});

export default Home;
