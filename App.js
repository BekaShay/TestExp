import React from "react";
import { StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigate from "./src/BottomBar/TabNavigate";

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