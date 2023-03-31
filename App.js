import React, { useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from "./src/navigation/navigate/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import { getStorage } from "./src/storage/LocalStorage";

const Stack = createStackNavigator();


const App = () => {
    // console.log('135 TOKEN : ',getStorage(TOKEN));
    return (
        <AuthProvider>
            <Navigation />
        </AuthProvider>
    );
}

export default App; 