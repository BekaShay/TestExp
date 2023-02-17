import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import OurContactsComponent from '../../components/OurContactsComponent';
import ProfileButton from '../../components/ProfileButton';
import SwichButtonComponent from '../../components/SwichButtonComponent';
import TariffComponent from '../../components/TariffComponent';


const ProfileScreenTrue = () => {
  

  const [isLocalization, setIsLocalization] = useState(true);

  return <>
    <ScrollView style={styles.scrollView}>
    <SwichButtonComponent
        styleBackView={styles.switchButton}
        firstText="Русский"
        secondText="Қазақша"
        focus={isLocalization}
        setFocus={setIsLocalization}
      />
      <TouchableOpacity>
        <ProfileButton/>
      </TouchableOpacity>
      <TouchableOpacity>
        <TariffComponent/>
      </TouchableOpacity>
      <Text style={styles.title}>Навигация</Text>
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
