import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import api from '../../Services/api';

import {IListStoreDetails} from '../../Types';

const Details: React.FC = () => {
  const [storeValue, setStoreValue] = useState(1);

  useEffect(() => {
    api
      .get(`discounts?store=${storeValue}`)
      .then(response => {
        console.log('store', response.data);
      })
      .catch(e => console.log(e));
  }, [storeValue]);
  return (
    <View style={styles.default}>
      <Text style={styles.title}>Nome da Loja</Text>
      <Image source={require('../../Assets/Images/desconto.png')} />
      <Text style={styles.discountLabel}>15% de desconto</Text>
      <Text style={styles.inforDateails}>Valido até ....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
  },
  discountLabel: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'red',
  },
  inforDateails: {
    fontSize: 18,
  },
});

export default Details;
