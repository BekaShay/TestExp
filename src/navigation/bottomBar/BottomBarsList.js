import React from "react";
import { View } from "react-native";
import { CatalogLogo, MainLogo, MyBooksLogo, ProfileLogo, BascetLogo } from "../../assets/icons/svgIcons";
import BascetCount from "../../components/markers/BascetCount";
import ConstatsApp from "../../constants/ConstatsApp";
import BascetScreen from "../../screens/bascet/BascetScreen";
import MySubscriptionsScreen from "../../screens/catalog/MySubscriptionsScreen";
import CatalogScreen from "../../screens/catalog/MySubscriptionsScreen";
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
        name: 'MyBooksScreen',
        component: MyBooksScreen,
        title: 'Мои Книги',
        logoTrue: <MyBooksLogo focused={true}/>,
        logoFalse: <MyBooksLogo/>,
    },
    {
        name: 'MySubscriptionsScreen',
        component: MySubscriptionsScreen,
        title: 'Мои подписки',
        logoTrue: <CatalogLogo focused={true}/>,
        logoFalse: <CatalogLogo/>,
    },
    {
        name: 'BascetScreen',
        component: BascetScreen,
        title: 'Корзина',
        logoTrue: <View><BascetLogo focused={true}/><BascetCount/></View>,
        logoFalse: <View><BascetLogo/><BascetCount/></View>,
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
