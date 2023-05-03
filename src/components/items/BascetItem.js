import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { CloseLogo, TypeAudio, TypeEBook, TypePaper } from '../../assets/icons/svgIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LitleButton from '../LitleButton';
import CountButtonComponent from '../buttons/CountButtonComponent';

const BascetItem = (data) => {
  const [count, setCount] = useState(1);
  console.log('BasketItem : ', data?.data);



  return (
    <View style={styles.itemView}>
      <View style={styles.titleView}>
        <Image style={styles.image} source={{ uri: data?.data?.book_image }} />
        <View style={styles.titleTextView}>
          <Text style={styles.title}>{data?.data?.name}</Text>
          <Text style={styles.info}>{data?.data?.author[0]?.name}</Text>
          {data?.data?.attributes?.type == 'paper' ? <TypePaper />
            : data?.data?.attributes?.type == 'ebook' ? <TypeEBook />
              : data?.data?.attributes?.type == 'audio' ? <TypeAudio /> : null}
        </View>
        <TouchableOpacity>
          <CloseLogo />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Количество страниц: {data?.data?.page_quanity}</Text>
        <Text style={styles.text}>ISBN: {data?.data?.isbn}</Text>
        <Text style={styles.text}>Год выпуска: {data?.data?.year}</Text>
      </View>
      <View style={styles.buttonsView}>
        <CountButtonComponent count={data?.data?.quantity} setCount={setCount} />
        <LitleButton isPrice buttonStyle={{ marginLeft: 10, flex: 1 }} buttonText={data?.data?.price + ' ₸'} />
        {/* <LitleButton isSecondStyle buttonStyle={{ marginLeft: 10 }} /> */}
      </View>
    </View>
  );
};

export default BascetItem;

const styles = StyleSheet.create({
  itemView: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingBottom: 12,
  },
  titleView: {
    flexDirection: 'row',
    marginTop: 16,
  },
  image: {
    backgroundColor: 'silver',
    height: 66,
    width: 45,
    borderRadius: 3,
  },
  titleTextView: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 17,
    color: '#333333',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 15,
    color: '#777777',
    marginBottom: 6,
  },
  textView: {
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 5,
  },
  buttonsView: {
    flexDirection: 'row',
  },
});
