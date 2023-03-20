import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NextLogo} from '../../assets/icons/svgIcons';
import {InformationList} from './InformationList';
import {NavigatController} from '../../api/controllers/API_Controllers';

const InformationButton = ({
  navigation,
  modalVisible = false,
  setModalVisible = () => undefined,
}) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await NavigatController.get({
        params: {lang: 'ru'},
      });
      const data = response.data;
      setData(data);
      setloading(false);
      console.log('Data :        ', data?.menu);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data?.menu?.map(item => (
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => {
              navigation.navigate('InformationScreen', {
                name: item?.label,
                link: item?.link,
              });
            }
          }>
          <Text style={styles.text}>{item?.label}</Text>
          <NextLogo />
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.buttonView} onPress={() => setModalVisible(true)}><Text>Выйти</Text></TouchableOpacity>
    </>
  );
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
