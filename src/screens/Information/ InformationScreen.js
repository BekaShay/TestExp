import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackLogo, NextLogo} from '../../assets/icons/svgIcons';
import RenderHTML from 'react-native-render-html';
import {NavigatController} from '../../api/controllers/API_Controllers';

const InformationScreen = ({route, navigation}) => {
  const {name, link} = route.params;
  const id = link.substring(link.length - (link.length - link.lastIndexOf('/')) + 1, link.length);
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    setloading(true);
    try {
      const response = await NavigatController.getByLink(String(id), 'ru');
      const data = response?.data;
      setData(data);
      setloading(false);
      // console.log('Data :        ', data?.page?.page_content);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
    setloading(false);
  };

  useEffect(() => {
    getData();
    navigation.setOptions({
      title: name,
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  const linkHtml = data?.page?.page_content?data?.page?.page_content:'Нет Данных';
  const source = {
    html: linkHtml,
  };
  if (loading) return <Text>Loading</Text>;
  else
    return (
      <View style={styles.view}>
        <RenderHTML
        source={source}
      />
      </View>
    );
};

export default InformationScreen; 

const styles = StyleSheet.create({
  view: {
    margin: 12,
  }
});
