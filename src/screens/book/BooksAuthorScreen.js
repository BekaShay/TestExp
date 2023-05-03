import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import FastImage from 'react-native-fast-image';
import { AuthorController } from '../../api/controllers/API_Controllers';
import { BackLogo } from '../../assets/icons/svgIcons';
import { FlatList } from 'react-native-gesture-handler';
import ConstatsApp from '../../constants/ConstatsApp';

const { width, height } = Dimensions.get('window');


const BooksAuthorScreen = ({ route, navigation }) => {
    const idItem = route.params;
    console.log("id ------:", idItem.id);

    const [data, setData] = useState(null);
    const [loading, setLoadting] = useState(true);
    const getData = async () => {
        setLoadting(true);
        try {
            const response = await AuthorController.getById({
                params: { author_id: idItem.id, lang: 'ru' },
            });
            console.log('Book ---------: ', response?.data);
            setData(response?.data);
            setLoadting(false);
        } catch (error) {
            console.error(error);
            setLoadting(false);
        }
    };

    useLayoutEffect(() => {
        getData();
        navigation.setOptions({
            title: null,
            headerTransparent: true,
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
                <View style={styles.topView}>
                    <FastImage style={styles.topImage} source={{ uri: data?.author?.author_photo }}
                    ></FastImage>
                </View>

                <View style={styles.bottomView}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{data?.author?.name}</Text>
                    </View>
                    <FlatList
                        data={data?.author?.books}
                        renderItem={renderItem}
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        )
    }
}

export default BooksAuthorScreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        // backgroundColor: 'green',
    },
    topView: {
        width: width,
        height: height / 4,
        // backgroundColor: 'blue'
    },
    bottomView: {
        flex: 1,
        // backgroundColor: 'yellow'
    },
    topImage: {
        width: width,
        height: height / 4,
    },
    titleView: {
        width: width,
        height: 54,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        padding: 16,
        marginBottom: 12,
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