import React from "react";
import { CatalogLogo, MainLogo, MyBooksLogo, ProfileLogo, BascetLogo } from "../assets/svgIcons";
import ConstatsApp from "../ConstatsApp";
import BascetScreen from "../screens/BascetScreen";
import CatalogScreen from "../screens/CatalogScreen";
import MainPageScreen from "../screens/mainPage/MainPageScreen";
import MyBooksScreen from "../screens/MyBooksScreen";
import ProfileScreenFalse from "../screens/Profile/ProfileScreenFalse";
import ProfileScreenTrue from "../screens/Profile/ProfileScreenTrue";

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
        component: ConstatsApp.authIs?ProfileScreenTrue:ProfileScreenFalse,
        title: 'Профиль',
        logoTrue: <ProfileLogo focused={true}/>,
        logoFalse: <ProfileLogo/>,
    },
];

export default BottomBarsList;