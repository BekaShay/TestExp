import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigate from '../bottomBar/TabNavigate';
import InformationScreen from '../../screens/Information/ InformationScreen';
import TariffScreen from '../../screens/tariff/TariffScreen';
import EditProfileScreen from '../../screens/profile/EditProfileScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
