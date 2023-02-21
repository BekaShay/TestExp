import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import TariffComponent from '../../components/TariffComponent';
import {TariffLogo} from '../../assets/icons/svgIcons';

const tempData = [
  {
    name: 'Тариф',
    price: 'На 1 месяц - 1000т',
  },
  {
    name: 'Тариф',
    price: 'На 3 месяц - 2000т',
  },
  {
    name: 'Тариф',
    price: 'На 6 месяц - 4000т',
  },
  {
    name: 'Тариф',
    price: 'На 1 год - 7000т',
  },
];

const TariffScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Мой тариф',
      headerBackTitle: ' ',
      //   headerBackImage: () => (),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  const RenderItem = ({name=null, price=null}) => (
    <View style={styles.tariffBackView}>
      <View style={styles.tariffItemView}>
        <Text style={styles.tariffItemText}>{name}</Text>
        <TariffLogo />
        <TouchableOpacity style={styles.tariffItemButton}>
          <Text style={styles.tariffItemButtonText}>{price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <TariffComponent />
      <Text style={styles.title}>Тарифы</Text>
      <FlatList
      contentContainerStyle={{paddingBottom: 200}}
      data={tempData}
      renderItem={({item}) => <RenderItem name={item.name} price={item.price}/>}
      />
    </View>
  );
};

export default TariffScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 13,
  },
  tariffBackView: {
    paddingLeft: 18,
    paddingRight: 18,
    marginBottom: 30,
  },
  tariffItemView: {
    backgroundColor: '#ECF9FF',
    alignSelf: 'center',
    width: '100%',
    height: 284,
    borderRadius: 16,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  tariffItemText: {
    color: '#2590C2',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  tariffItemButton: {
    backgroundColor: '#2590C2',
    borderRadius: 4,
    width: '100%',
    position: 'absolute',
    height: 53,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 20,
  },
  tariffItemButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
