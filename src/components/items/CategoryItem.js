import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ConstatsApp from '../../constants/ConstatsApp'

const CategoryItem = ({title='tempText', Event=null}) => {
  return (
    <TouchableOpacity style={styles.view}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    view: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ConstatsApp.mainColor,
        marginBottom: 5,
        borderRadius: 4,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})