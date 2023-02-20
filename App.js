import React from "react";
import { StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigate from "./src/BottomBar/TabNavigate";
import InformationScreen from "./src/screens/Information/ InformationScreen";
import TariffScreen from "./src/screens/TariffScreen";
import EditProfileScreen from "./src/screens/Profile/EditProfileScreen";

const Stack = createStackNavigator();


const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="TabNavigate"
            component={TabNavigate}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="InformationScreen"
            component={InformationScreen}
            // options={{headerShown: true}}
            />
            <Stack.Screen
            name="TariffScreen"
            component={TariffScreen}
            // options={{headerShown: true}}
            />
            <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
            // options={{headerShown: true}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'green',
        height: '100%',
        width: '100%',
    }
});