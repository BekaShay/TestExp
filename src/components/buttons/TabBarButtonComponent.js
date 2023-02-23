import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TabBarButtonComponent = ({Event=null, Logo=null}) => {
  return (
    <TouchableOpacity style={styles.TabBarView} onPress={Event}>
        {Logo}
    </TouchableOpacity>
  )
}

export default TabBarButtonComponent

const styles = StyleSheet.create({
    TabBarView: {
        height: 24,
        width: 24,
        marginRight: 20,
        marginLeft: 20,
    },
})