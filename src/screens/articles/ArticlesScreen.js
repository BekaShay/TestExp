import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import ArticlesItem from '../../components/items/ArticlesItem';
import { BackLogo } from '../../assets/icons/svgIcons';
import { ArticlesController } from '../../api/controllers/API_Controllers';

const ArticlesScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await ArticlesController.get();
      const data = response.data;
      setData(data);
      setloading(false);
      // console.log(data.collections[0].books);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };
  useEffect(() => {
    getData();
    navigation.setOptions({
      title: 'Мақалалар',
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  const renderItem = useCallback(({ item }) =>
    <ArticlesItem item={item} isPage Event={() => navigation.navigate('ArticleItemScreen', { id: item.id })} />
    , [])

  if (loading) {
    return <View style={{ alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>;
  } else {
    return (
      <View style={styles.view}>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default ArticlesScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingRight: 10,
  },
});
