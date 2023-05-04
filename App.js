import React, { useEffect, useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from "./src/navigation/navigate/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import { getStorage } from "./src/storage/LocalStorage";
import { BascetCountProvider, InitBascetCount, useBascetCount } from "./src/context/BascetCountProvider";
import { BasketController } from "./src/api/controllers/API_Controllers";

const Stack = createStackNavigator();


const App = () => {

    return (
        <AuthProvider>
            <BascetCountProvider>
                <Navigation />
            </BascetCountProvider>
        </AuthProvider>
    );
}

export default App; 