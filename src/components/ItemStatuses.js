import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Item = ({logoItem = null, itemText = '', color='green'}) => {
  return (
    <View style={[styles.ItemView, null]}>
      {logoItem}
      <Text style={styles.ItemText}>{itemText}</Text>
    </View>
  );
};

const NewItem = () => {
  return <Item logoItem="" itemText="НОВИНКА" color='#CB0F75'/>;
};

const TopItem = () => {
  return <Item logoItem="" itemText="ЛУЧШИЕ КНИГИ ПО МНЕНИ.." color='green'/>;
};

const BestsellerItem = () => {
  return <Item logoItem="" itemText="БЕСТСЕЛЛЕР" color='#EF2525'/>;
};

export default {NewItem, TopItem, BestsellerItem};

const styles = StyleSheet.create({
  ItemView: {
    borderRadius: 3,
    height: 18,
    position: 'absolute',
    top: 5,
    left: 5,
  },
  ItemText: {
    fontSize: 11,
    color: '#FFFFFF',
  },
});
