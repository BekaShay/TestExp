import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {BackLogo} from '../../assets/icons/svgIcons';
import CategoryItem from '../../components/items/CategoryItem';
import {FlatList} from 'react-native-gesture-handler';
import {TempCategoryData} from '../../data/TempCategoryData';

const CategoryScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Каталог',
      headerBackTitle: ' ',
      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, []);

  return (
    <View style={styles.view}>
      <FlatList
        data={TempCategoryData}
        renderItem={({item}) => <CategoryItem title={item.title} />}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  view: {
    paddingTop: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },
});
