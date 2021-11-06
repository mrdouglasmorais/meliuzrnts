import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const List: React.FC = () => {
  return (
    <View style={styles.default}>
      <Text>Listagem</Text>
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

export default List;
