import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ExitModalComponent from '../../components/modal/ExitModalComponent';
import OurContactsComponent from '../../components/OurContactsComponent';
import ProfileButton from '../../components/buttons/ProfileButton';
import SwichButtonComponent from '../../components/buttons/SwichButtonComponent';
import TariffComponent from '../../components/TariffComponent';
import InformationButton from '../Information/InformationButton';
import { ProfileController } from '../../api/controllers/API_Controllers';

const ProfileScreenTrue = ({ navigation }) => {
  const [exitVisible, setExitVisible] = useState(false);
  const [isLocalization, setIsLocalization] = useState(true);
  
  const[data,setData]=useState(null);
  const[loading, setloading]=useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await ProfileController.get();
      const data = response.data;
      setData(data);
      setloading(false);
      console.log('------------- UserData: ', data);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);



  return <>
    <ExitModalComponent modalVisible={exitVisible} setModalVisible={setExitVisible} />
    <ScrollView style={styles.scrollView}>
      <SwichButtonComponent
        styleBackView={styles.switchButton}
        firstText="Русский"
        secondText="Қазақша"
        focus={isLocalization}
        setFocus={setIsLocalization}
      />
      <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
        <ProfileButton title={data?.user_name} text={data?.email} imageUri={data?.avatar}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TariffScreen')}>
        <TariffComponent isButton />
      </TouchableOpacity>
      <Text style={styles.title}>Навигация</Text>
      <InformationButton navigation={navigation} modalVisible={exitVisible} setModalVisible={setExitVisible} />
    </ScrollView>
    <OurContactsComponent />
  </>

};

export default ProfileScreenTrue;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  viewEnd: {
    height: 100,
    width: '100%',
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    color: '#808191',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 3,
  },
  switchButton: {
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 20,
  }
});
