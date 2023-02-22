import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { InBascetLogo } from '../../assets/icons/svgIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ConstatsApp from '../../constants/ConstatsApp'

const PrimaryItem = ({name='TempText', title='TempText', price='1 300т', logoStatus=null, logoLike=null, isBuy=false}) => {

  return (
    <TouchableOpacity style={styles.view}>
        <View style={styles.logoView}>{logoStatus}{logoLike}</View>
        <Image style={styles.image} source={{uri: null}}/>
        <View style={styles.priceView}>
            <Text style={styles.price}>{price}</Text>
            {isBuy?<TouchableOpacity><InBascetLogo/></TouchableOpacity>:null}
        </View>
        <Text style={styles.author} numberOfLines={1}>{name}</Text>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        {isBuy?null:<TouchableOpacity><Text style={styles.subscribe}>Подписка</Text></TouchableOpacity>}
    </TouchableOpacity>
  )
}

export default PrimaryItem

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        width: 130,
        height: 340,
        borderRadius: 4,
        elevation: 10,
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOpacity: 0.4,
        marginLeft: 10,
    },
    image: {
        backgroundColor: 'green',
        width: '100%',
        height: 190,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
    author: {
        color: '#777777',
        fontSize: 13,
        marginTop: 10,
        marginLeft: 4,
    },
    title: {
        marginTop: 6,
        fontSize: 15,
        color: '#333333',
        marginLeft: 4,
        fontWeight: 'bold',
    },
    priceView: {
        flexDirection: 'row',
        marginLeft: 4,
        marginRight: 8,
        marginTop: 14,
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    logoView: {
        width: '100%',
        height: 36,
        position: 'absolute',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        flexDirection: 'row',
        zIndex: 1,
    },
    subscribe: {
        fontSize: 17,
        color: ConstatsApp.mainColor,
        marginLeft: 4,
        marginTop: 10,
    },
})