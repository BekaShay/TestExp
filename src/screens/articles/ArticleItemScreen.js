import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {BackLogo} from '../../assets/icons/svgIcons';
import FastImage from 'react-native-fast-image';

const ArticleItemScreen = ({route, navigation}) => {
  const item = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: 'Мақала',
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);


  return (
    <View style={styles.view}>
      <Text style={styles.title}>TempText</Text>
      <FastImage style={styles.image} source={{uri: null}} />
      <Text style={styles.text}>{item?.title}</Text>
    </View>
  );
};

export default ArticleItemScreen;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: 'silver',
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'green',
    marginBottom: 12,
  },
});
