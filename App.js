import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Navigation from "./src/navigation/navigate/Navigation";

const Stack = createStackNavigator();


const App = () => {
    return (
        <Navigation/>
    );
}

export default App;