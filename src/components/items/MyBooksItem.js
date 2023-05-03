import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {InBascetLogo, IsLikeLogo} from '../../assets/icons/svgIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ConstatsApp from '../../constants/ConstatsApp';
import FastImage from 'react-native-fast-image';

const MyBooksItem = ({
  item,
  logoStatus = null,
  isBuy = false,
  like = false,
  setLike = null,
  isLike = true,
  Event=null,
}) => {
  const IsLikeFun = () => {
    return (
      <TouchableOpacity onPress={() => setLike(!like)}>
        <IsLikeLogo isLike={like}/>
      </TouchableOpacity>
    );
  };

  const IsBuyFun = () => {
    return (
      <TouchableOpacity>
        <InBascetLogo />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity style={styles.view} onPress={Event}>
      <View style={styles.logoView}>
        {logoStatus}
        {isLike ? <IsLikeFun /> : null}
      </View>
      <FastImage style={styles.image} source={{uri: item?.images}} />
      <View style={styles.priceView}>
        <Text style={styles.price}>{item?.paperbook_price}</Text>
        {item.pay_type == 'buy' ? <IsBuyFun /> : null}
      </View>
      <Text style={styles.author} numberOfLines={1}>
        {item?.authors[0]?.name}
      </Text>
      <Text style={styles.title} numberOfLines={2}>
        {item?.book_name}
      </Text>
      {item.pay_type == 'subscribe' ? (
        <TouchableOpacity>
          <Text style={styles.subscribe}>Подписка</Text>
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

export default MyBooksItem;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    flex: 1,
    height: 340,
    borderRadius: 4,
    elevation: 10,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.2,
    marginBottom: 8,
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
    fontSize: 15,
    marginTop: 8,
    marginLeft: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 4,
    marginTop: 10,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    marginRight: 8,
    marginTop: 14,
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
    paddingTop: 8,
    paddingLeft: 6,
    paddingRight: 6,
  },
  subscribe: {
    fontSize: 17,
    color: ConstatsApp.mainColor,
    marginLeft: 4,
    marginTop: 10,
  },
});
