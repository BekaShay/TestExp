import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { BackLogo, FragmentBook, GiftLogo } from '../../assets/icons/svgIcons';
import FastImage from 'react-native-fast-image';
import SwichButtonComponent from '../../components/buttons/SwichButtonComponent';
import ConstatsApp from '../../constants/ConstatsApp';
import ReviewBar from '../../components/ReviewBar';
import ButtonComponent from '../../components/buttons/ButtonComponent';
import { BasketController, BookController } from '../../api/controllers/API_Controllers';
import PrimaryItem from '../../components/items/PrimaryItem';
import RenderHTML from 'react-native-render-html';
import FeedbackItem from '../../components/items/FeedbackItem';
const { width, height } = Dimensions.get('window');

const BookDetailScreen = ({ route, navigation }) => {
  const [bookType, setBookType] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoadting] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const id = route.params;

  const getPriceOrType = (isType = false, checkType = false) => {
    if (isType) {
      if (bookType == 0) {
        return 'paper';
      }
      else if (bookType == 1) {
        return 'ebook';
      }
      else if (bookType == 2) {
        return 'audio';
      }
      else {
        return 0;
      }
    }
    else if (checkType) {
      if (bookType == 0) {
        return true;
      }
      else if (bookType == 1) {
        return data?.ebook_path ? true : false;
      }
      else if (bookType == 2) {
        return data?.audio_file ? true : false;
      }
      else {
        return false;
      }
    }
    else {
      if (bookType == 0) {
        return data?.paperbook_price ? data?.paperbook_price : 0;
      }
      else if (bookType == 1) {
        return data?.ebook_price ? data?.ebook_price : 0;
      }
      else if (bookType == 2) {
        return data?.audio_price ? data?.audio_price : 0;
      }
      else {
        return 0;
      }
    }
  }

  const getData = async () => {
    setLoadting(true);
    try {
      const response = await BookController.get({
        params: { book_id: id, lang: 'ru' },
      });
      const data = response?.data?.data;
      setData(data);
      setLoadting(false);
      console.log('Book detail : ', data);
    } catch (error) {
      console.error(error);
      setLoadting(false);
    }
    // setLoadting(false);
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

  const FragmentButton = () => (
    <TouchableOpacity style={styles.fragmentButton}>
      <FragmentBook />
      <Text style={styles.fragmentText}>Фрагмент</Text>
    </TouchableOpacity>
  );

  const GiftButton = () => {
    return (
      <TouchableOpacity style={styles.giftView} onPress={() => addBookToBascet()}>
        <GiftLogo />
      </TouchableOpacity>
    );
  };

  const tapBuyBook = () => {
    if (!data?.available) {
      Alert.alert('Внимание!', 'Книга нет в наличии');
      return;
    }
  }

  const addBookToBascet = async () => {
    console.log("Pressed");
    if (!data?.available) {
      Alert.alert(strings['Внимание!'], strings['Книга нет в наличии']);
      return;
    }
    else {
      if (getPriceOrType() <= 0) {
        if (!getPriceOrType(false, true)) {
          console.log('Book not found !');
        }
      }
      else {
        let params = {
          book_id: data?.book_id,
          type: getPriceOrType(true),
        };
        // console.log("Book is added");
        const response = await BasketController.update(params);
        console.log("Resp: ", response);
        navigation.navigate('BascetScreen');
      }
    }
  }

  const renderItem = useCallback(({ item }) =>
    <PrimaryItem item={item} Event={() => navigation.push('BookDetailScreen', { item: item?.id })} />
    , [])

  if (loading) { return <Text>loading...</Text> }
  else {
    return (
      <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <FastImage style={styles.modalImage} source={{ uri: modalImage }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalBackButton}>X</Text>
              </TouchableOpacity>
            </FastImage>
          </View>
        </Modal>
        <ScrollView>
          <FastImage
            style={styles.image}
            source={{ uri: data?.book_images[0]?.path }}>
            <View style={styles.backgroundView}>
              <Text style={styles.title}>{data?.book_name}</Text>
              <View style={{ width: 30, height: 2, backgroundColor: '#FFFFFF' }} />
              <Text style={{ color: '#FFFFFF50', fontSize: 17, marginTop: 20 }}>
                Пошаговое рукооводство
              </Text>
              <FragmentButton />
            </View>
          </FastImage>
          <View style={styles.view}>
            <SwichButtonComponent
              firstText="Бумага"
              secondText="Электронная"
              thirdText="Аудио"
              firstButtonWidth={95}
              focus={bookType}
              setFocus={setBookType}
              styleBackView={styles.swichButton}
            />
            <Text style={styles.authorInfo}>
              Автор:
              {data?.author.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('BooksAuthorScreen', { id: item.id })}>
                  <Text style={styles.maincolor}>{item?.name}, </Text>
                </TouchableOpacity>
              ))}
              {'\n'}
              Из серии: <Text style={styles.maincolor}>
                {data?.genres.map((item, index) =>
                  <TouchableOpacity key={index} onPress={() => navigation.navigate('BooksSeriaScreen', { id: item.genre_id })}>
                    <Text style={styles.maincolor}>{item?.name},</Text>
                  </TouchableOpacity>)}
              </Text>
            </Text>
            <View style={styles.imageList}>
              {
                data?.book_images.map((item, index) => {
                  return <TouchableOpacity onPress={() => { setModalVisible(true); setModalImage(item?.path) }}>
                    <FastImage key={index} style={{ height: 50, width: 50, marginLeft: 8, }} source={{ uri: item?.path }} />
                  </TouchableOpacity>
                })
              }
            </View>
            <ReviewBar rating={data?.rating} reviewCount={data?.feedbacks?.length} />
            <Text style={styles.price}>{getPriceOrType()} ₸</Text>
            <TouchableOpacity>
              <Text style={styles.rulesText}>
                Ознакомьтесь с правилами доставки
              </Text>
            </TouchableOpacity>
            <View style={styles.buyView}>
              <View style={{ flex: 1 }}>
                <ButtonComponent buttonText="Купить сейчас" isBold onPressFun={tapBuyBook} />
              </View>
              <GiftButton />
            </View>
            <View style={styles.cardView}>
              <FastImage
                style={[styles.cardBackGround, { width: 78 }]}
                resizeMode={FastImage.resizeMode.center}
                source={require('../../assets/images/VisaLogo.png')}
              />
              <FastImage
                style={[styles.cardBackGround, { flex: 1 }]}
                resizeMode={FastImage.resizeMode.center}
                source={require('../../assets/images/MasterCardLogo.png')}
              />
              <FastImage
                style={[styles.cardBackGround, { width: 40, marginRight: 0 }]}
                resizeMode={FastImage.resizeMode.center}
                source={require('../../assets/images/QiviLogo.png')}
              />
            </View>
            <Text style={styles.rulesText}>*Қабылданатын төлем жүйелері</Text>
            <Text style={styles.contentTitle}>Анотиция</Text>
            <RenderHTML style={styles.contentText} source={{ html: data?.book_description }} />

            <Text style={styles.contentTitle}>Информация</Text>
            <Text style={styles.contentInfo}>
              Количество страниц: <Text style={styles.contentInlet}>{data?.page_quanity}</Text>
              {'\n'}
              ISBN: <Text style={styles.contentInlet}>{data?.isbn}</Text>
              {'\n'}
              Год выпуска: <Text style={styles.contentInlet}>{data?.year}</Text>
              {'\n'}
              Имеется: <Text style={styles.contentInlet}>{data?.available}</Text>
              {'\n'}
              Доставка: <Text style={styles.contentInlet}>{null}</Text>
            </Text>
            <Text style={styles.contentTitle}>С этой книгой читают</Text>
            <FlatList
              data={data?.more_book}
              renderItem={renderItem}
              horizontal
              keyExtractor={item => item.id}
            />
          </View>
          {data?.feedbacks.map((item, index) => <FeedbackItem key={index} item={item} />)}
        </ScrollView>
      </>
    );
  }
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#33333390',
    justifyContent: 'center'
  },
  modalImage: {
    height: 300,
    width: width,
    alignItems: 'flex-end'
  },
  modalBackButton: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    margin: 16
  },
  view: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
  },
  image: {
    flex: 1,
    height: 395,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  fragmentButton: {
    height: 32,
    width: 131,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  fragmentText: {
    marginLeft: 12,
    fontSize: 17,
    color: '#333333',
  },
  swichButton: {
    marginBottom: 20,
  },
  authorInfoView: {},
  authorInfo: {
    fontSize: 15,
    marginBottom: 20,
  },
  maincolor: {
    color: ConstatsApp.mainColor,
  },
  price: {
    fontSize: 32,
    marginTop: 20,
  },
  rulesText: {
    marginTop: 6,
    marginBottom: 20,
    fontSize: 15,
    color: '#777777',
  },
  giftView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 70,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#8D287633',
    marginLeft: 20,
  },
  buyView: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cardView: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  cardBackGround: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginRight: 10,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentText: {
    fontSize: 17,
    marginBottom: 20,
  },
  contentInlet: {
    fontSize: 17,
    color: '#333333',
  },
  contentInfo: {
    color: '#777777',
    marginBottom: 20,
  },
  backgroundView: {
    backgroundColor: '#111111CC',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  feedbackView: {
    width: width,
    height: 400,
  },
  imageList: {
    flexDirection: 'row',
    marginBottom: 16,
  }
});
