import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import api from '../../Services/api';
import {IPosition, IList} from '../../Types';
import {setNewStoreID} from '../../Store/Modules/ListDetails/Actions';
import {IGlobalStoreId} from '../../Store/Modules/ListDetails/Types';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const nav = useNavigation();

  const [position] = useState<IPosition>({
    latitude: -23.673081449999998,
    longitude: -46.677047406643354,
    latitudeDelta: 0.0911,
    longitudeDelta: 0.0411,
  });
  const [list, setList] = useState<IList[]>([]);

  const handleStoreDetails = (val: number, screen: any) => {
    const newStore: IGlobalStoreId = {
      store_id: val,
    };
    dispatch(setNewStoreID(newStore));
    nav.navigate(screen);
  };

  useEffect(() => {
    api.get('stores').then(response => {
      setList(response.data);
    });
  }, []);

  return (
    <View style={styles.default}>
      <MapView style={styles.mapStyle} initialRegion={position}>
        {list.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.localization.lat,
              longitude: item.localization.lng,
            }}>
            <Callout>
              <View style={styles.calloutStyle}>
                <Text style={styles.calloutTitle}>{item.label}</Text>
                <TouchableOpacity
                  onPress={() => handleStoreDetails(item.id, 'Detalhes')}>
                  <Text>Ver mais</Text>
                </TouchableOpacity>
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
  calloutStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutTitle: {
    fontWeight: 'bold',
    color: '#81002b',
    fontSize: 15,
  },
});

export default List;
