import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {BackLogo} from '../../assets/icons/svgIcons';

const FavoritesScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Избранные',
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);
  return <View style={styles.view}>
    <Text style={styles.title}>Нет данных</Text>
  </View>;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    view: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 20,
        marginTop: 12,
        alignSelf: 'center',
    },
});
