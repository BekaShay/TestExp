import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ArticlesItem from '../../components/items/ArticlesItem';
import {BackLogo} from '../../assets/icons/svgIcons';
import {ArticlesController} from '../../api/controllers/API_Controllers';

const ArticlesScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await ArticlesController.get();
      const data = response.data;
      setData(data);
      setloading(false);
      console.log(data.collections[0].books);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log('Navigate: ', navigation);

  console.log(data);

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

  if (loading) {
    <Text>Loading</Text>;
  } else {
    return (
      <View style={styles.view}>
        <FlatList
          data={data.data}
          renderItem={({item}) => <ArticlesItem item={item} isPage Event={() => navigation.navigate('ArticleItemScreen')}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default ArticlesScreen;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
    paddingRight: 10,
  },
});
