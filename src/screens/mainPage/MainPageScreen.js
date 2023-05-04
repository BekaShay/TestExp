import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import PrimaryItem from '../../components/items/PrimaryItem';
import { MainController } from '../../api/controllers/API_Controllers';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ArticlesButton from '../articles/ArticlesButton';
import ArticlesItem from '../../components/items/ArticlesItem';
import HeaderTabBar from '../../components/buttons/HeaderTabBar';

const MainPageView = ({ paramType = null, navigation = null }) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const getData = async () => {
    setloading(true);
    try {
      const response = await MainController.get({ params: { type: paramType, } });
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



  const renderCollectionItem = useCallback(({ item }) => {
    if (item?.books != 0) {
      return (
        <>
          <Text style={styles.H1}>{item?.collection_name}</Text>
          <FlatList
            data={item?.books}
            renderItem={renderBookItem}
            horizontal
            keyExtractor={(item, index) => index}
          />
        </>
      )
    }
    else { return null }
  }, [])

  const renderBookItem = useCallback(({ item }) => {
    return <PrimaryItem
      item={item}
      Event={() =>
        navigation.navigate('BookDetailScreen', { item: item?.id })
      }
    />;
  }, [])

  const renderArticleItem = useCallback(({ item }) => (
    <ArticlesItem
      item={item}
      Event={() =>
        navigation.navigate('ArticleItemScreen', { item: item.id })
      }
    />
  ), [])

  if (loading) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>loading...</Text>
      </View>
    );
  } else {
    return (
      <>
        <ScrollView style={styles.mainScreenBackView}>
          <CarouselComponent item={data?.banner} />

          <FlatList
            data={data?.collections}
            renderItem={renderCollectionItem}
            keyExtractor={(item, index) => index}
          />

          <ArticlesButton Event={() => navigation.navigate('ArticlesScreen')} />
          <FlatList
            data={data?.articles}
            keyExtractor={(item, index) => index}
            renderItem={renderArticleItem}
            horizontal
          />
        </ScrollView>
      </>
    );
  }
};

const MainPageScreen = ({ navigation }) => {
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
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) =>
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
    flex: 1,
  },
  H1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 20,
  },
});
