import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ConstatsApp from '../../constants/ConstatsApp';

const BascetCount = ({count = 0}) =>
  count ? (
    <View style={styles.view}>
      <Text style={styles.count}>{count}</Text>
    </View>
  ) : null;

export default BascetCount;

const styles = StyleSheet.create({
  view: {
    backgroundColor: ConstatsApp.mainColor,
    borderRadius: 10,
    position: 'absolute',
    padding: 2,
    paddingLeft: 4,
    paddingRight: 4,
    right: -10,
    top: -10,
  },
  count: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});
