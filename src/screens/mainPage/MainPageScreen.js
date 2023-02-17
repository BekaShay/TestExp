import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ListComponent from '../../components/ListComponent';
import dataTemp from '../../data/Data';
import NewItem from '../../components/ItemStatuses';
import CarouselComponent from '../../components/carousel/CarouselComponent';

const MainPageScreen = () => {
  return (
    <View style={styles.mainScreenBackView}>
      <CarouselComponent item={dataTemp}/>
      <Text style={styles.H1}>Новинки</Text>
      <ListComponent dataTemp={dataTemp}/>
      
    </View>
  );
};

export default MainPageScreen;

const styles = StyleSheet.create({
  mainScreenBackView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  H1: {
    fontSize: 30,
    marginTop: 25,
    marginBottom: 25,
  },
});
