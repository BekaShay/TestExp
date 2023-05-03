import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import RenderHTML from 'react-native-render-html';

const screenWidth = Dimensions.get('window').width;

const ArticlesItem = ({item, isPage = false, Event = null}) => {
  const widthView = isPage ? '100%' : 250;

  return (
    <TouchableOpacity style={[styles.view, {width: widthView}]} onPress={Event}>
      <FastImage
        style={styles.image}
        source={{uri: item.image}}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text style={styles.title} numberOfLines={3}>
        {item.title}
      </Text>
      <RenderHTML source={{html: item.short_text}} numberOfLines={3} contentWidth={screenWidth}/>
    </TouchableOpacity>
  );
};

export default ArticlesItem;

const styles = StyleSheet.create({
  view: {
    height: 320,
    borderRadius: 6,
    elevation: 10,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.2,
    marginLeft: 10,
    marginBottom: 2,
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: 'green',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    marginLeft: 8,
  },
  text: {
    fontSize: 14,
    marginLeft: 8,
    marginTop: 12,
  },
});
