import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ConstatsApp from '../../constants/ConstatsApp';
import { useBascetCount } from '../../context/BascetCountProvider';
import { BasketController } from '../../api/controllers/API_Controllers';

const BascetCount = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const { bascetCount } = useBascetCount();

  if (!loading) {
    if (bascetCount) {
      return <View style={styles.view}>
        <Text style={styles.count}>{bascetCount}</Text>
      </View>
    }
    else {
      return null;
    }
  }
  else return null
}

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
