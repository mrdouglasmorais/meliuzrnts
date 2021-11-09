import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.default}>
      <Image source={require('../../Assets/Images/desconto.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Home;
