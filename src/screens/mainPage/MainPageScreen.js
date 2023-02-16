import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ListComponent from '../../components/ListComponent';
import dataTemp from '../../data/Data';
import CarouselComponent from './CarouselComponent';
import NewItem from '../../components/ItemStatuses';

const MainPageScreen = () => {
  return (
    <View style={styles.mainScreenBackView}>
      <CarouselComponent />
      <Text style={styles.H1}>Новинки</Text>
      <ListComponent dataTemp={dataTemp}/>
      {/* <NewItem/> */}
      
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
