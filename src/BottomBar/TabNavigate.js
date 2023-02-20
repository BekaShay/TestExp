import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPageScreen from '../screens/mainPage/MainPageScreen';
import BottomBarsList from './BottomBarsList';
import MainLogo from '../assets/svgIcons';
import ConstatsApp from '../ConstatsApp';

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
        // headerStyle: {
        //   height:
        // }
      })}>
      {BottomBarsList.map(param => (
        <Tab.Screen
          name={param.name}
          component={param.component}
          options={{
            title: param.title,
            tabBarIcon: ({focused, size, color}) => {
              if (focused) {
                return param.logoTrue;
              } else {
                return param.logoFalse;
              }
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
