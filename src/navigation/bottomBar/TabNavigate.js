import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPageScreen from '../../screens/mainPage/MainPageScreen';
import BottomBarsList from './BottomBarsList';
import MainLogo, {CategoryLogo, SearchLogo} from '../../assets/icons/svgIcons';
import ConstatsApp from '../../constants/ConstatsApp';
import TabBarButtonComponent from '../../components/buttons/TabBarButtonComponent';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const Tab = createBottomTabNavigator();

const TabNavigate = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: true,
        tabBarStyle: [null],
        tabBarActiveTintColor: ConstatsApp.mainColor,
        tabBarinactiveTintColor: '#C1CBD7',
        tabBarLabelStyle: [null],
      })}>
      {BottomBarsList.map((param, index) => (
        <Tab.Screen
          key={index}
          {...param}
          options={{
            title: param.title,
            tabBarIcon: ({focused, size, color}) => {
              if (focused) {
                return param.logoTrue;
              } else {
                return param.logoFalse;
              }
            },
            headerRight: () => {
              if (param.name != 'ProfileScreen')
                return (
                  <TabBarButtonComponent Logo={<SearchLogo />} Event={null} />
                );
            },
            headerLeft: () => {
              if (param.name != 'ProfileScreen')
                return (
                  <TabBarButtonComponent Logo={<CategoryLogo />} Event={null} />
                );
            },
          }}
          listeners={{
            tabPress: event => {
              if (!ConstatsApp.authIs) {
                event.preventDefault();
                navigation.navigate('ProfileScreen');
              }
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigate;
