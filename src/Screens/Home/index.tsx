import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, StyleSheet, Button} from 'react-native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleScreen = (name: any) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.default}>
      <Text>Início</Text>
      <Button
        title="Veja os descontos"
        onPress={() => handleScreen('Listagem')}
      />
      <Button title="Fale conosco" onPress={() => handleScreen('Contato')} />
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
