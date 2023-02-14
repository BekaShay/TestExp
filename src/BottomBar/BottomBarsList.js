import React from "react";
import { CatalogLogo, MainLogo, MyBooksLogo, ProfileLogo, BascetLogo } from "../assets/svgIcons";
import BascetScreen from "../screens/BascetScreen";
import CatalogScreen from "../screens/CatalogScreen";
import MainPageScreen from "../screens/MainPageScreen";
import MyBooksScreen from "../screens/MyBooksScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const BottomBarsList = [
    {
        name: 'MainPageScreen',
        component: MainPageScreen,
        title: 'Главная',
        logoTrue: <MainLogo focused={true}/>,
        logoFalse: <MainLogo/>,
    },
    {
        name: 'CatalogScreen',
        component: CatalogScreen,
        title: 'Каталог',
        logoTrue: <CatalogLogo focused={true}/>,
        logoFalse: <CatalogLogo/>,
    },
    {
        name: 'MyBooksScreen',
        component: MyBooksScreen,
        title: 'Мои Книги',
        logoTrue: <MyBooksLogo focused={true}/>,
        logoFalse: <MyBooksLogo/>,
    },
    {
        name: 'BascetScreen',
        component: BascetScreen,
        title: 'Корзина',
        logoTrue: <BascetLogo focused={true}/>,
        logoFalse: <BascetLogo/>,
    },
    {
        name: 'ProfileScreen',
        component: ProfileScreen,
        title: 'Профиль',
        logoTrue: <ProfileLogo focused={true}/>,
        logoFalse: <ProfileLogo/>,
    },
];

export default BottomBarsList;