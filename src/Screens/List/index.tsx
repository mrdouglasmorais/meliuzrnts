import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const List: React.FC = () => {
  const [position, setPosition] = useState<IPosition>({
    latitude: -8.0584933,
    longitude: -34.8848193,
    latitudeDelta: 0.0911,
    longitudeDelta: 0.0411,
  });

  const handlePosition = () => {
    setPosition({
      latitude: -8.0584933,
      longitude: -34.8848193,
      latitudeDelta: 0.0911,
      longitudeDelta: 0.0411,
    });
  };

  return (
    <View style={styles.default}>
      <MapView style={styles.mapStyle} initialRegion={position}>
        <Marker
          coordinate={{
            latitude: -8.0584933,
            longitude: -34.8848193,
          }}>
          <Callout onPress={handlePosition}>
            <View>
              <Text>O Gabriel mora aqui</Text>
            </View>
          </Callout>
        </Marker>
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
