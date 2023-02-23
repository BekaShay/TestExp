import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ArticlesItem from '../../components/items/ArticlesItem';
import {BackLogo} from '../../assets/icons/svgIcons';

const ArticlesScreen = ({route, navigation}) => {
  const data = route?.params;

  useEffect(() => {
    navigation.setOptions({
      title: 'Мақалалар',
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  console.log('Hhhhhhhhh', data);
  return (
    <View>
      <FlatList data={data} renderItem={ArticlesItem} />
    </View>
  );
};

export default ArticlesScreen;

const styles = StyleSheet.create({});
