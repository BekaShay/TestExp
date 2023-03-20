import {Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import ConstatsApp from '../../constants/ConstatsApp';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryBookItem = ({Event = null, item=null}) => {
    console.log(item);
  return (
    <TouchableOpacity style={styles.view} onPress={Event}>
      <FastImage style={styles.image} source={{uri: item?.book_image}}></FastImage>
      <View style={styles.priceView}>
      <Text style={styles.price}>{item?.price}</Text>
      </View>
      <Text style={styles.author}>{item?.book_name}</Text>
      <Text style={styles.title} numberOfLines={3}>{item?.book_name}</Text>
        <TouchableOpacity><Text style={styles.subscribe}>Жазылым</Text></TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CategoryBookItem;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    width: windowWidth / 2 - 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 4,
    elevation: 10,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  image: {
    height: 190,
    width: '100%',
    backgroundColor: 'blue',
  },
  price: {
    fontSize: 20,
  },
  priceView: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: 12,
    color: '#777777',
    marginLeft: 8,
    marginBottom: 2,
  },
  title: {
    marginLeft: 8,
    fontSize: 17,
    marginRight: 8,
  },
  subscribe: {
    fontSize: 17,
    color: ConstatsApp.mainColor,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 12,
  },
});
