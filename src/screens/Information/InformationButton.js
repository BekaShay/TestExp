import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NextLogo} from '../../assets/icons/svgIcons';
import {InformationList} from './InformationList';

const InformationButton = ({navigation, modalVisible=false, setModalVisible=null}) => {
  return InformationList.map(item => (
    <TouchableOpacity
      style={styles.buttonView}
      onPress={() => {
        if (item.name == 'Выйти') {
          setModalVisible(true)  
        } 
        else {
          navigation.navigate('InformationScreen', {
            name: item.name,
            text: item.text,
          });
        }
      }}>
      <Text style={styles.text}>{item.name}</Text>
      <NextLogo />
    </TouchableOpacity>
  ));
};

export default InformationButton;

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E2E0',
  },
  text: {
    flex: 1,
    fontSize: 17,
    color: '#333333',
  },
});
