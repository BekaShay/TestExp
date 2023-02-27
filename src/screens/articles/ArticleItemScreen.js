import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackLogo} from '../../assets/icons/svgIcons';
import FastImage from 'react-native-fast-image';
import {ArticlesController} from '../../api/controllers/API_Controllers';
import RenderHTML from 'react-native-render-html';

const ArticleItemScreen = ({route, navigation}) => {
  const { width, height } = Dimensions.get('window');
  const [data, setData] = useState(null);
  const [loading, setLoadting] = useState(true);
  const articleId = route.params;
  console.log(articleId);

  const getData = async () => {
    setLoadting(true);
    try {
      const response = await ArticlesController.get({
        params: {article_id: articleId, lang: 'kz'},
      });
      const data = response?.data?.data;
      setData(data);
      setLoadting(false);
      // console.log(data.collections[0].books);
    } catch (error) {
      console.error(error);
      setLoadting(false);
    }
    setLoadting(false);
  };

  useEffect(() => {
    getData();
    console.log('getData: ', data);
    navigation.setOptions({
      title: 'Мақала',
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);
  if (loading == true) {
    <Text>Loading</Text>;
  } else {
    const source = {
      html: data.text
    };

    return (
      <ScrollView style={styles.view}>
        <Text style={styles.title}>{data.title}</Text>
        <FastImage style={styles.image} source={{uri: data.image}} />
        <RenderHTML contentWidth={width} source={source} />
        <View style={{height: 100}}/>
      </ScrollView>
    );
  }
};

export default ArticleItemScreen;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'silver',
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
