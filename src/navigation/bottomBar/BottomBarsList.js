import React from "react";
import { CatalogLogo, MainLogo, MyBooksLogo, ProfileLogo, BascetLogo } from "../../assets/icons/svgIcons";
import ConstatsApp from "../../constants/ConstatsApp";
import BascetScreen from "../../screens/bascet/BascetScreen";
import CatalogScreen from "../../screens/catalog/CatalogScreen";
import MainPageScreen from "../../screens/mainPage/MainPageScreen";
import MyBooksScreen from "../../screens/myBooks/MyBooksScreen";
import AuthorizationScreen from "../../screens/profile/AuthorizationScreen";
import ProfileScreenTrue from "../../screens/profile/ProfileScreenTrue";

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
        component: ConstatsApp.authIs?ProfileScreenTrue:AuthorizationScreen,
        title: 'Профиль',
        logoTrue: <ProfileLogo focused={true}/>,
        logoFalse: <ProfileLogo/>,
    },
];

export default BottomBarsList;