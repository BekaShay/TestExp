import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ConstatsApp from '../../constants/ConstatsApp';
import FastImage from 'react-native-fast-image';

const CategoryItem = ({title = 'tempText', Event = null, item = null}) => {
  return (
    <TouchableOpacity style={styles.view} onPress={Event}>
      <FastImage source={{uri: item?.genre_image}} style={styles.image}>
        <Text style={styles.title}>{item?.genre_name}</Text>
      </FastImage>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  view: {
    height: 70,
    width: '100%',

    backgroundColor: ConstatsApp.mainColor,
    marginBottom: 5,
    borderRadius: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
