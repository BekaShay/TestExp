import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import { BackLogo, FragmentBook } from '../../assets/icons/svgIcons';
import FastImage from 'react-native-fast-image';

const BookDetailScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: null,
      headerTransparent: true,
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    });
  }, []);

  const FragmentButton = () => <TouchableOpacity style={styles.fragmentButton}>
    <FragmentBook/>
    <Text style={styles.fragmentText}>Фрагмент</Text>
  </TouchableOpacity>

  return <ScrollView style={styles.view}>
    <FastImage style={styles.image}>
        <Text style={styles.title}>TempTitle</Text>
        <View style={{width: 30, height: 2, backgroundColor: '#FFFFFF',}}/>
        <Text style={{color: '#FFFFFF50', fontSize: 17, marginTop: 20,}}>Пошаговое рукооводство</Text>
        <FragmentButton/>
    </FastImage>
  </ScrollView>;
};

export default BookDetailScreen;

const styles = StyleSheet.create({
    view: {

    },
    image: {
        backgroundColor: 'green',
        width: '100%',
        height: 395,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    fragmentButton: {
        height: 32,
        width: 131,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    fragmentText: {
        marginLeft: 12,
        fontSize: 17,
        color: '#333333',
    },
});
