import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import dataTemp from '../../data/Data';
import NewItem from '../../components/ItemStatuses';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import CategoryItem from '../../components/items/CategoryItem';
import PrimaryItem from '../../components/items/PrimaryItem';
import {IsLikeLogo, LikeLogo} from '../../assets/icons/svgIcons';
import BascetCount from '../../components/markers/BascetCount';
import {MainController} from '../../api/controllers/API_Controllers';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ArticlesButton from '../articles/ArticlesButton';
import ArticlesItem from '../../components/items/ArticlesItem';

const MainPageScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await MainController.get();
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

  if (loading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  } else {
    return (
      <ScrollView style={styles.mainScreenBackView}>
        <CarouselComponent item={data.banner} />
        <Text style={styles.H1}>{data.collections[0]?.collection_name}</Text>
        <FlatList
          data={data.collections[0]?.books}
          renderItem={PrimaryItem}
          horizontal
        />

        <Text style={styles.H1}>{data.collections[1].collection_name}</Text>
        <FlatList
          data={data.collections[1]?.books}
          renderItem={PrimaryItem}
          horizontal
        />

        <Text style={styles.H1}>{data.collections[3]?.collection_name}</Text>
        <FlatList
          data={data.collections[3]?.books}
          renderItem={PrimaryItem}
          horizontal
        />
        
        <Text style={styles.H1}>{data.collections[4]?.collection_name}</Text>
        <FlatList
          data={data.collections[4]?.books}
          renderItem={PrimaryItem}
          horizontal
        />

        <ArticlesButton Event={() => navigation.navigate('ArticlesScreen')}/>
        <FlatList
        data={data.articles}
        renderItem={({item}) => <ArticlesItem item={item} Event={() => navigation.navigate('ArticleItemScreen', {item: item})}/>}
        horizontal
        />
      </ScrollView>
    );
  }
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
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 20,
  },
});
