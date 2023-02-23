import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ArticlesButton = ({Event}) => {
  return (
    <TouchableOpacity style={styles.view} onPress={Event}>
      <Text style={styles.title}>Мақалалар</Text>
      <Text style={{fontSize: 18}}>{'\>'}</Text>
    </TouchableOpacity>
  )
}

export default ArticlesButton

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        // backgroundColor: 'green',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})