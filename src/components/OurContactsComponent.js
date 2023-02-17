import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { MessageLogo, WhatsAppLogo } from '../assets/svgIcons';

const OurContactsComponent = () => {
  return (
    <View style={styles.ourContactsView}>
      <TouchableOpacity style={styles.button}>
        <WhatsAppLogo/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MessageLogo/>
      </TouchableOpacity>
    </View>
  );
};

export default OurContactsComponent;

const styles = StyleSheet.create({
  ourContactsView: {
    borderTopWidth: 1,
    borderTopColor: '#E1E2E0',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 19.5,
    paddingRight: 19.5,
  },
  button: {
    width: 164,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
