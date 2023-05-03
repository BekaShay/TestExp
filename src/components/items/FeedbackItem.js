import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { StarLogo } from '../../assets/icons/svgIcons'
import ConstatsApp from '../../constants/ConstatsApp'

const FeedbackItem = ({ item, rating=0 }) => {
    return (
        <View style={styles.view}>
            <View style={styles.avatarView}><FastImage style={styles.avatar} source={{uri: item?.user_avatar}}/></View>
            <View style={styles.textView}>
                <Text style={styles.name}>{item?.user_name}</Text>
                <View style={{flexDirection: 'row'}}>
                <StarLogo color={Number(item?.rating) >= 1 ? ConstatsApp.mainColor : '#C4C4C6'} />
                <StarLogo color={Number(item?.rating) >= 2 ? ConstatsApp.mainColor : '#C4C4C6'} />
                <StarLogo color={Number(item?.rating) >= 3 ? ConstatsApp.mainColor : '#C4C4C6'} />
                <StarLogo color={Number(item?.rating) >= 4 ? ConstatsApp.mainColor : '#C4C4C6'} />
                <StarLogo color={Number(item?.rating) >= 5 ? ConstatsApp.mainColor : '#C4C4C6'} /></View>
                <Text style={styles.feedbackText}>{item?.text}</Text>
            </View>
            <Text style={styles.feedbackDate}>{item?.created_at.substr(0,10)}</Text>
        </View>
    )
}

export default FeedbackItem

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 162,
        // backgroundColor: 'green',
        borderBottomWidth: 0.5,
        borderBottomColor: '#000000',
        // marginBottom: 20,
    },
    feedbackDate: {
        position: 'absolute',
        right: 16,
        bottom: 20,
    },
    avatarView: {
        flex: 1,
        // backgroundColor: 'red'
    },
    textView: {
        flex: 3,
        // backgroundColor: 'blue'
    },
    avatar: {
        // backgroundColor: 'yellow',
        height: 40,
        width: 40,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 18,
    },
    name: {
        fontSize: 15,
        color: '#777777',
        marginTop: 18,
    },
    feedbackText: {
        fontSize: 15,
        color: '#333333',
        marginTop: 15,
        marginBottom: 44,
    },
})