import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderTabBar from '../../components/buttons/HeaderTabBar';
import { MyBooksController } from '../../api/controllers/API_Controllers';
import { FlatList } from 'react-native-gesture-handler';
import MyBooksItem from '../../components/items/MyBooksItem';

const MyBooksScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [focus, setFocus] = useState(0);

  const getData = async () => {
    setloading(true);
    try {
      const response = await MyBooksController.getNewOverride();
      const data = response.data;
      setData(data);
      setloading(false);
      // console.log("MyBooks : ", data);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const renderItem = useCallback(({ item }) =>
  (<MyBooksItem item={item}
    Event={() =>
      navigation.navigate('BookDetailScreen', { item: item?.book_id })
    } />)
    , [])

  const ReadNowView = () => {
    return <View style={styles.readNowView}>
      <FlatList
        data={data?.isreading}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      // numColumns={2}
      />
    </View>;
  };

  const ElectronicAudioView = () => {
    return <View style={styles.electronicAudioView}></View>;
  };

  const MyBooksHeaderBarList = [
    {
      title: 'ЧИТАЮ СЕЙЧАС',
    },
    {
      title: 'ЭЛЕКТРОННАЯ/АУДИО',
    },
  ];

  return (
    <>
      <HeaderTabBar
        data={MyBooksHeaderBarList}
        focus={focus}
        setFocus={setFocus}
      />
      {focus ? <ElectronicAudioView /> : <ReadNowView />}
    </>
  );
};

export default MyBooksScreen;

const styles = StyleSheet.create({
  readNowView: {
    flex: 1,
    // backgroundColor: 'red',
    padding: 12,
  },
  electronicAudioView: {
    flex: 1,
  },
});
