import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const {height, width} = Dimensions.get('window');

const CarouselComponent = ({item}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <FastImage
          style={[styles.itemImage, {priority: FastImage.priority.normal}]}
          source={{uri: item.slider_image}}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>
    );
  };

  return (
    <View style={styles.carouselView}>
      <FlatList
        data={item}
        renderItem={renderItem}
        horizontal
        snapToAlignment="center"
        pagingEnabled
      />
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  carouselView: {
    height: 184,
    width: '100%',
  },
  itemContainer: {
    height: height,
    width: width,
  },
  itemImage: {
    height: 184,
    width: width,
  },
});
