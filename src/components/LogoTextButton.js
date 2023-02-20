import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NextLogo } from '../assets/svgIcons'

const LogoTextButton = ({Logo=null, Event=null}) => {
  return (
    <TouchableOpacity style={styles.backView} onPress={() => Event}>
        {Logo?<Logo/>:null}
        <Text style={styles.text}>Избранные</Text>
        <NextLogo/>
    </TouchableOpacity>
  )
}

export default LogoTextButton

const styles = StyleSheet.create({
    backView: {
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        height: 49,
        width: '100%',
        alignItems: 'center',
        paddingRight: 12,
        paddingLeft: 15,
    },
    text: {
        marginLeft: 12,
        fontSize: 17,
        flex: 1,
    },
})