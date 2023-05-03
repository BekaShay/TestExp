import {StyleSheet, Text, ScrollView, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextBox from '../../components/TextBox';
import { ProfileController } from '../../api/controllers/API_Controllers';

const EditProfileScreen = ({navigation}) => {
  const[data,setData]=useState(null);
  const[loading, setloading]=useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await ProfileController.get();
      const data = response.data;
      setData(data);
      setloading(false);
      // console.log('------------- UserData: ', data);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };

  useEffect(() => {
    getData();
    navigation.setOptions({
      title: 'Профиль',
      headerBackTitle: ' ',
      //   headerBackImage: () => (),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  return (
    <ScrollView style={styles.backView}>
      <Image style={styles.profileImage} source={{uri: data?.avatar?data?.avatar:null}}/>
      <Text style={styles.title}>Контактная информация</Text>
      <TextBox placeholder={data?.user_name?data.user_name:'ФИО'}/>
      <TextBox placeholder={data?.email?data.email:'E-mail'}/>
      <TextBox placeholder='Телефон'/>
      <Text style={styles.title}>Адрес доставки</Text>
      <TextBox placeholder='Населенный пункт'/>
      <TextBox placeholder='Улица'/>
      <TextBox placeholder='Дом'/>
      <TextBox placeholder='Подьезд'/>
      <TextBox placeholder='Квартира / Офис'/>
      <TextBox placeholder='Почтовый индекс'/>
      <Text style={styles.title}>Пароль</Text>
      <TextBox placeholder='Новый пароль' isPassword/>
      <TextBox placeholder='Старый пароль' isPassword/>
      <View style={{height: 100}}></View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  backView: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  profileImage: {
    backgroundColor: 'green',
    height: 78,
    width: 78,
    borderRadius: 39,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 24,
  },
});
