import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigate from '../bottomBar/TabNavigate';
import InformationScreen from '../../screens/Information/ InformationScreen';
import TariffScreen from '../../screens/tariff/TariffScreen';
import EditProfileScreen from '../../screens/profile/EditProfileScreen';
import CategoryScreen from '../../screens/category/CategoryScreen';
import SearchScreen from '../../screens/search/SearchScreen';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';
import ArticlesScreen from '../../screens/articles/ArticlesScreen';
import ArticleItemScreen from '../../screens/articles/ArticleItemScreen';
import BookDetailScreen from '../../screens/book/BookDetailScreen';
import AuthorScreen from '../../screens/book/AuthorScreen';
import PublisherScreen from '../../screens/book/PublisherScreen';
import SeriScreen from '../../screens/book/SeriScreen';
import CategoryDetailScreen from '../../screens/category/CategoryDetailScreen';

const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigate"
          component={TabNavigate}
          options={{headerShown: false}}
        />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
        <Stack.Screen name="TariffScreen" component={TariffScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} />
        <Stack.Screen name="ArticleItemScreen" component={ArticleItemScreen} />
        <Stack.Screen name="AuthorScreen" component={AuthorScreen} />
        <Stack.Screen name="PublisherScreen" component={PublisherScreen} />
        <Stack.Screen name="SeriScreen" component={SeriScreen} />
        <Stack.Screen name='BookDetailScreen' component={BookDetailScreen}/>
        <Stack.Screen name='CategoryDetailScreen' component={CategoryDetailScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
