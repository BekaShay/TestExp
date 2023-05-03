import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LikeLogo } from '../../assets/icons/svgIcons';
import LogoTextButton from '../../components/buttons/LogoTextButton';
import BascetItem from '../../components/items/BascetItem';
import { BasketController } from '../../api/controllers/API_Controllers';
import { FlatList } from 'react-native-gesture-handler';
import ConstatsApp from '../../constants/ConstatsApp';

const BascetScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getPrice = () => {
    return data?.data.reduce((total, books) => {
      return total + books?.price * books?.quantity
    }, 0)
  }
  const getCount = () => {
    return data?.data.reduce((total, books) => {
      return total + books?.quantity
    }, 0)
  }

  const getData = async () => {
    setloading(true);
    try {
      const response = await BasketController.getAll();
      const data = response.data;
      setData(data);
      setloading(false);
      // console.log("BascetData : ", data);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  }
  useEffect(() => {
    getData();
  }, []);


  const renderItem = useCallback(({ item }) => {
    // console.log('Bascet Book: ', item);
    return <BascetItem data={item} />
  }, [])
  if (loading) {
    return <View style={styles.loadingView}><Text>Loading</Text></View>
  }
  return (
    <View style={styles.backView}>
      <LogoTextButton Logo={LikeLogo} Event={() => navigation.navigate('FavoritesScreen')} />
      <FlatList
        data={data?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {data?.data ?
        <View style={styles.sumContainer}>
          <View style={styles.sumView}>
            <Text style={styles.sumText}>Книги: {getCount() ? getCount() : 0}</Text>
            <Text style={styles.sumText}>Суmmа: {getPrice() ? getPrice() : 0} ₸</Text>
          </View>
          <View style={styles.sumButtonView}>
            <TouchableOpacity style={styles.sumButton}>
              <Text style={styles.sumButtonText}>{'\>'}</Text>
            </TouchableOpacity>
          </View>
        </View> : null}
    </View>
  );
};

export default BascetScreen;

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sumContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 112,
    flexDirection: 'row',
  },
  sumView: {
    justifyContent: 'center',
    marginLeft: 20,
    flex: 1,
  },
  sumButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
  },
  sumButton: {
    backgroundColor: ConstatsApp.mainColor,
    height: 46,
    width: 46,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sumText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  sumButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});
