import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreditCardsLogo, NextLogo } from '../assets/icons/svgIcons'
import ConstatsApp from '../constants/ConstatsApp'

const TariffComponent = ({title='Оформить подписку', text = null, isButton=false}) => {
  return (
    <View style={styles.tariffView}>
        <View style={styles.logo}>
            <CreditCardsLogo/>
        </View>
        <View style={styles.textView}>
            <Text style={styles.title}>{title}</Text>
            {text?<Text style={styles.text}>{text}</Text>:null}
        </View>
        {isButton?<NextLogo/>:null}
    </View>
  )
}

export default TariffComponent

const styles = StyleSheet.create({
    tariffView: {
        flexDirection: 'row',
        height: 74,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingRight: 17,
    },
    textView: {
        flex: 1,
    },
    logo: {
        marginLeft: 16,
        marginRight: 15,
    },
    title: {
        fontSize: 17,
        color: ConstatsApp.mainColor,
    },
    text: {
        fontSize: 15,
        color: '#777777',
    },
})