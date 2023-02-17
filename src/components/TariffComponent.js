import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreditCardsLogo, NextLogo } from '../assets/svgIcons'

const TariffComponent = ({title='Тариф высший оформлен', text = 'осталось 6 дней (6 месяцев)'}) => {
  return (
    <View style={styles.tariffView}>
        <View style={styles.logo}>
            <CreditCardsLogo/>
        </View>
        <View style={styles.textView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
        <NextLogo/>
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
        color: '#8D2976',
    },
    text: {
        fontSize: 15,
        color: '#777777',
    },
})