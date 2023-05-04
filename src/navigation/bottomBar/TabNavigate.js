import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPageScreen from '../../screens/mainPage/MainPageScreen';
import { BottomBarsList, AuthorisationScreens } from './BottomBarsList';
import MainLogo, { CategoryLogo, SearchLogo } from '../../assets/icons/svgIcons';
import ConstatsApp from '../../constants/ConstatsApp';
import TabBarButtonComponent from '../../components/buttons/TabBarButtonComponent';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { useAuth } from '../../context/AuthContext';

const Tab = createBottomTabNavigator();

const TabNavigate = ({ navigation }) => {
  const { isAuth } = useAuth();

  var TabBarScreens = isAuth ? BottomBarsList : AuthorisationScreens;


  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: true,
        tabBarStyle: [null],
        tabBarActiveTintColor: ConstatsApp.mainColor,
        tabBarinactiveTintColor: '#C1CBD7',
        tabBarLabelStyle: [null],
      })}>
      {TabBarScreens.map((param, index) => (
        <Tab.Screen
          key={index}
          {...param}
          options={{
            title: param.title,

            tabBarIcon: ({ focused, size, color }) => {
              if (focused) {
                return param.logoTrue;
              } else {
                return param.logoFalse;
              }
            },
            headerRight: () => {
              if (param.name != 'ProfileScreen')
                return (
                  <TabBarButtonComponent Logo={<SearchLogo />} Event={() => navigation.navigate('SearchScreen')} />
                );
            },
            headerLeft: () => {
              if (param.name != 'ProfileScreen')
                return (
                  <TabBarButtonComponent Logo={<CategoryLogo />} Event={() => navigation.navigate('CategoryScreen')} />
                );
            },
          }}
          listeners={{
            tabPress: event => {
              if (!isAuth) {
                event.preventDefault();
                navigation.navigate('AuthorizationScreen');
              }
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigate;
