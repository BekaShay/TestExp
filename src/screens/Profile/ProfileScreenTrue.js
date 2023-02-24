import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import ExitModalComponent from '../../components/modal/ExitModalComponent';
import OurContactsComponent from '../../components/OurContactsComponent';
import ProfileButton from '../../components/buttons/ProfileButton';
import SwichButtonComponent from '../../components/buttons/SwichButtonComponent';
import TariffComponent from '../../components/TariffComponent';
import InformationButton from '../Information/InformationButton';

const ProfileScreenTrue = ({navigation}) => {
  
  const [exitVisible, setExitVisible] = useState(false);
  const [isLocalization, setIsLocalization] = useState(true);

  
  

  return <>
    <ExitModalComponent modalVisible={exitVisible} setModalVisible={setExitVisible}/>
    <ScrollView style={styles.scrollView}>
    <SwichButtonComponent
        styleBackView={styles.switchButton}
        firstText="Русский"
        secondText="Қазақша"
        focus={isLocalization}
        setFocus={setIsLocalization}
      />
      <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
        <ProfileButton/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TariffScreen')}>
        <TariffComponent isButton/>
      </TouchableOpacity>
      <Text style={styles.title}>Навигация</Text>
      <InformationButton navigation = {navigation} modalVisible={exitVisible} setModalVisible={setExitVisible}/>
    </ScrollView>
    <OurContactsComponent/>
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
