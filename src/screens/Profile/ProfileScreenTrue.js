import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import TextBox from '../../components/TextBox';
import ProfileView from './ProfileView';

const ProfileScreenTrue = () => {
  const [ProfileInfo, setProfileInfo] = useState({
    name: '',
    email: '',
    number: '',
    locality: '',
    street: '',
    home: '',
    entrance: '',
    apartment: '',
  });

  return (
    <View style={styles.MainScreenBackView}>
      <ProfileView name="Beka Shaymov" email="BekaShaymov@gmail.com" />
      <Text style={styles.h1Text}>Контактная информация</Text>
      <TextBox placeholder="Имя" TextBoxValue={ProfileInfo.name} TextBoxOnChange={setProfileInfo}/>
      <TextBox placeholder="Email" TextBoxValue={ProfileInfo.email} TextBoxOnChange={setProfileInfo}/>
      <TextBox placeholder="Номер" TextBoxValue={ProfileInfo.number} TextBoxOnChange={setProfileInfo}/>
      <Text style={styles.h1Text}>Адрес доставки</Text>
      <TextBox placeholder="Населенный пункт" TextBoxValue={ProfileInfo.locality} TextBoxOnChange={setProfileInfo}/>
      <TextBox placeholder="Улица" TextBoxValue={ProfileInfo.street} TextBoxOnChange={setProfileInfo}/>
      <TextBox placeholder="Дом" TextBoxValue={ProfileInfo.home} TextBoxOnChange={setProfileInfo}/>
      <TextBox placeholder="Подьезд" TextBoxValue={ProfileInfo.entrance} TextBoxOnChange={setProfileInfo}/>
      <TextBox placeholder="Квартира/Офис" TextBoxValue={ProfileInfo.apartment} TextBoxOnChange={setProfileInfo}/>
      <ButtonComponent buttonText='Сохранить' buttonStyle={{marginTop: 16}}/>
    </View>
  );
};

export default ProfileScreenTrue;

const styles = StyleSheet.create({
  MainScreenBackView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },
  h1Text: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: 18,
  },
});
