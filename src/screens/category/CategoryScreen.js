import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { BackLogo } from '../../assets/icons/svgIcons';
import CategoryItem from '../../components/items/CategoryItem';
import { FlatList } from 'react-native-gesture-handler';
import { TempCategoryData } from '../../data/TempCategoryData';
import { GenreController } from '../../api/controllers/API_Controllers';

const CategoryScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await GenreController.get();
      const data = response.data;
      setData(data);
      setloading(false);
      console.log(data);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };

  useEffect(() => {
    getData();
    navigation.setOptions({
      title: 'Каталог',
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  const renderItem = useCallback(({ item }) =>
    <CategoryItem item={item} Event={() => navigation.navigate('CategoryDetailScreen', { id: item?.genre_id, title: item?.genre_name })} />
    , [])
  if (loading) { }
  else {
    return (
      <View style={styles.view}>
        <FlatList
          data={data?.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default CategoryScreen;

const styles = StyleSheet.create({
  view: {
    paddingTop: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },
});
