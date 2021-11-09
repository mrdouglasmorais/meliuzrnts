import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../Services/api';
import {IPosition, IList} from '../../Types';

const List: React.FC = () => {
  const [position, setPosition] = useState<IPosition>({
    latitude: -23.673081449999998,
    longitude: -46.677047406643354,
    latitudeDelta: 0.0911,
    longitudeDelta: 0.0411,
  });
  const [list, setList] = useState<IList[]>([]);

  console.log('Store', list);

  const handlePosition = () => {
    setPosition({
      latitude: -23.673081449999998,
      longitude: -46.677047406643354,
      latitudeDelta: 0.0911,
      longitudeDelta: 0.0411,
    });
  };

  useEffect(() => {
    api.get('stores').then(response => {
      setList(response.data);
    });
  }, []);

  return (
    <View style={styles.default}>
      <MapView style={styles.mapStyle} initialRegion={position}>
        {list.map(store => (
          <Marker
            key={store.id}
            coordinate={{
              latitude: store.localization.lat,
              longitude: store.localization.lng,
            }}>
            <Callout onPress={handlePosition}>
              <View>
                <Text>{store.label}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mapStyle: {
    height: '100%',
    width: '100%',
  },
});

export default List;
