import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { BackLogo, NextLogo } from '../../assets/svgIcons';

const  InformationScreen = ({route, navigation}) => {
  const {name, text } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerBackTitle: ' ',
      headerBackImage: () => (<BackLogo/>),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

    const temp = text? text : 'Ақпарат жоқ';
  return (
    <View>
      <Text>{temp}</Text>
    </View>
  )
}

export default  InformationScreen

const styles = StyleSheet.create({})