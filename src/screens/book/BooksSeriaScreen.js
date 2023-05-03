import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import FastImage from 'react-native-fast-image';
import { AuthorController, PublisherController } from '../../api/controllers/API_Controllers';
import { BackLogo } from '../../assets/icons/svgIcons';
import { FlatList } from 'react-native-gesture-handler';
import ConstatsApp from '../../constants/ConstatsApp';

const { width, height } = Dimensions.get('window');


const BooksSeriaScreen = ({ route, navigation }) => {
    const idItem = route.params;
    console.log("id ------:", idItem.id);

    const [data, setData] = useState(null);
    const [loading, setLoadting] = useState(true);
    const getData = async () => {
        setLoadting(true);
        try {
            const response = await PublisherController.getById({
                params: { publisher_id: idItem.id, lang: 'ru' },
            });
            console.log('Book ---------: ', response?.data);
            setData(response?.data);
            setLoadting(false);
        } catch (error) {
            console.error(error);
            setLoadting(true);
        }
    };

    useLayoutEffect(() => {
        getData();
        navigation.setOptions({
            title: null,
            // headerTransparent: true,
            headerBackTitle: ' ',
            headerBackImage: () => <BackLogo />,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
    }, []);

    console.log('Data, :      ', data);


    const renderItem = useCallback(({ item }) => {
        return <View style={styles.itemView}>
            <FastImage
                style={styles.itemImage}
                source={{ uri: item?.book_image }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <Text style={styles.itemPrice}>{item?.paperbook_price}</Text>
            <Text style={styles.itemAuthor}>{item?.author[0]?.name}</Text>
            <Text style={styles.itemTitle}>{item?.name}</Text>
        </View>
    }, [])


    if (loading) {
        return
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Loading...</Text>
        </View>
    }
    else {
        return (
            <View style={styles.view}>
                <FlatList
                    data={data?.publisher?.books}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default BooksSeriaScreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        // backgroundColor: 'green',
    },
    title: {
        color: '#333',
        fontSize: 17,
        fontWeight: 'bold',
    },
    itemView: {
        borderWidth: 0.2,
        margin: 8,
        width: width / 2 - 16,
    },
    itemImage: {
        width: '100%',
        height: 165,
        backgroundColor: ConstatsApp.mainColor,
    },
    itemPrice: {
        fontSize: 17,
        color: '#333333',
        marginTop: 6,
        marginLeft: 6,
    },
    itemAuthor: {
        fontSize: 12,
        color: "#777777",
        marginTop: 6,
        marginLeft: 6,
    },
    itemTitle: {
        fontSize: 17,
        color: '#333333',
        marginTop: 8,
        marginLeft: 6,
    },
})