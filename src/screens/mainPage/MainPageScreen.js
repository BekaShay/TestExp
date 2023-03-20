import React, {useEffect, useRef, useState} from 'react';
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
import HeaderTabBar from '../../components/buttons/HeaderTabBar';

const MainPageView = ({paramType = null, navigation = null}) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const getData = async () => {
    setloading(true);
    try {
      const response = await MainController.get({params: {type: paramType,}});
      const data = response.data;
      setData(data);
      setloading(false);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log('Colec     ', data?.collections[0]);

  const RenderCollectionItem = ({item = null}) => {
    return (
      <>
        <Text style={styles.H1}>{item?.collection_name}</Text>
        <FlatList
          data={item?.books}
          renderItem={({item}) => (
            <PrimaryItem
              item={item}
              Event={() =>
                navigation.navigate('BookDetailScreen', {item: item?.id})
              }
            />
          )}
          horizontal
        />
      </>
    );
  };

  if (loading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  } else {
    return (
      <>
        <ScrollView style={styles.mainScreenBackView}>
          <CarouselComponent item={data?.banner} />

          <FlatList
            data={data?.collections}
            renderItem={({item, index}) => <RenderCollectionItem item={item} />}
          />

          <ArticlesButton Event={() => navigation.navigate('ArticlesScreen')} />
          <FlatList
            data={data?.articles}
            renderItem={({item}) => (
              <ArticlesItem
                item={item}
                Event={() =>
                  navigation.navigate('ArticleItemScreen', {item: item.id})
                }
              />
            )}
            horizontal
          />
        </ScrollView>
      </>
    );
  }
};

const MainPageScreen = ({navigation}) => {
  const [focus, setFocus] = useState(0);
  const MainHeaderTabBarList = useRef([
    {
      title: 'БУМАГА',
      type: null,
    },
    {
      title: 'ЭЛЕКТРОН',
      type: 'ebook',
    },
    {
      title: 'АУДИО',
      type: 'audio',
    },
  ]);

  return (
    <>
      <HeaderTabBar
        data={MainHeaderTabBarList.current}
        focus={focus}
        setFocus={setFocus}
      />
      <FlatList
        data={MainHeaderTabBarList.current}
        renderItem={({item, index}) =>
          focus == index ? (
            <MainPageView
              paramType={item.type}
              navigation={navigation}
            />
          ) : null
        }
      />
    </>
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
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 20,
  },
});
