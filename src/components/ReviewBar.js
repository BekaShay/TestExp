import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {StarLogo} from '../assets/icons/svgIcons';
import ConstatsApp from '../constants/ConstatsApp';

const ReviewBar = ({rating = 0, reviewCount=0}) => {
  return (
    <View style={styles.view}>
      <StarLogo color={rating >= 1 ? ConstatsApp.mainColor : '#C4C4C6'} />
      <StarLogo color={rating >= 2 ? ConstatsApp.mainColor : '#C4C4C6'} />
      <StarLogo color={rating >= 3 ? ConstatsApp.mainColor : '#C4C4C6'} />
      <StarLogo color={rating >= 4 ? ConstatsApp.mainColor : '#C4C4C6'} />
      <StarLogo color={rating >= 5 ? ConstatsApp.mainColor : '#C4C4C6'} />
      <Text style={styles.ratingText}>{rating}</Text>
      <View style={styles.line}/>
      <TouchableOpacity><Text style={styles.reviewCount}>Отзывов ({reviewCount})</Text></TouchableOpacity>
    </View>
  );
};

export default ReviewBar;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    paddingLeft: 20,
    borderRadius: 4,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    marginRight: 30,
    fontSize: 17,
    color: '#777777',
  },
  line: {
    height: 44,
    width: 1,
    backgroundColor: '#EEEEEE'
  },
  reviewCount: {
    fontSize: 17,
    color: ConstatsApp.mainColor,
    marginLeft: 20,
  },
});
