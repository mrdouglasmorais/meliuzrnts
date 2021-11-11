import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import api from '../../Services/api';

import {IListStoreDetails} from '../../Types';

const Details: React.FC = () => {
  const [storeValue, setStoreValue] = useState(1);
  const [storeData, setStoreData] = useState<IListStoreDetails>(
    {} as IListStoreDetails,
  );

  useEffect(() => {
    api
      .get(`discounts?store=${storeValue}`)
      .then(response => {
        if (response.data.length > 0) {
          api
            .get(`stores/${storeValue}`)
            .then(res => {
              setStoreData({...response.data[0], storeDetails: res.data});
            })
            .catch(e => console.log(e));
        }
      })
      .catch(e => console.log(e));
  }, [storeValue]);

  const dateParse = (value: Date) => {
    console.log('date', value);
    return Intl.DateTimeFormat('pt-BR').format(new Date(value));
  };

  return (
    <View style={styles.default}>
      <Text style={styles.title}>{storeData.storeDetails?.label}</Text>
      <Image
        source={{uri: storeData.storeDetails?.logo}}
        style={styles.logoIMG}
      />
      <Text style={styles.discountLabel}>{storeData.value}% de desconto</Text>
      <Text style={styles.inforDateails}>
        Valido até {storeData?.expires_in && dateParse(storeData?.expires_in)}
      </Text>
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
  logoIMG: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Details;
