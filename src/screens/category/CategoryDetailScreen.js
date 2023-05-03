import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { BackLogo } from '../../assets/icons/svgIcons';
import { GenreController } from '../../api/controllers/API_Controllers';
import PrimaryItem from '../../components/items/PrimaryItem';
import CategoryBookItem from '../../components/items/CategoryBookItem';

const CategoryDetailScreen = ({ route, navigation }) => {
  const param = route.params;

  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await GenreController.getById({
        params: { genre_id: param?.id, lang: 'ru' },
      });
      const data = response.data;
      setData(data);
      setloading(false);
      //   console.log(data?.data);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };

  useEffect(() => {
    getData();
    // console.log('getData: ', data);
    navigation.setOptions({
      title: param?.title,
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  const renderItem = useCallback(({ item }) => (
    <CategoryBookItem
      item={item}
      Event={() =>
        navigation.navigate('BookDetailScreen', { item: item?.book_id })
      }
    />
  )

    , [])

  if (loading) return <View style={{alignItems: 'center', justifyContent: 'center'}}><Text>Loading</Text></View>;
  else
    return (
      <View style={styles.view}>
        <FlatList
          data={data?.data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
  },
});
