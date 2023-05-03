import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import { getStorage } from '../../storage/LocalStorage';
import { useAuth } from '../../context/AuthContext';
import BooksAuthorScreen from '../../screens/book/BooksAuthorScreen';
import BooksSeriaScreen from '../../screens/book/BooksSeriaScreen';

const Stack = createStackNavigator();

const Navigation = () => {

  const [loading, setLoading] = useState(true);
  const { isAuth ,setIsAuth } = useAuth()
  

  useEffect(() => {
    (async () => {
      try {

        const user_token = await getStorage('TOKEN');
        if (user_token) {
          setIsAuth(true);
        }
      }
      catch (e) {
        console.log(e);
        setIsAuth(false);

      }
       setLoading(false);
    })();
  }, []);

  if (loading) {
    <Text>loading</Text>
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigate"
            component={TabNavigate}
            options={{ headerShown: false }}
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
          <Stack.Screen name='BookDetailScreen' component={BookDetailScreen} />
          <Stack.Screen name='CategoryDetailScreen' component={CategoryDetailScreen} />
          <Stack.Screen name='BooksAuthorScreen' component={BooksAuthorScreen} />
          <Stack.Screen name='BooksSeriaScreen' component={BooksSeriaScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigation;

const styles = StyleSheet.create({});
