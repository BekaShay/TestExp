import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ConstatsApp from '../constants/ConstatsApp';

const LitleButton = ({
  buttonText = 'Enter',
  Event = null,
  buttonStyle = null,
  isSecondStyle = false,
  isPrice = false,
}) => {
  const color = isSecondStyle
    ? `${ConstatsApp.mainColor}50`
    : ConstatsApp.mainColor;
  const fontColor = isSecondStyle ? ConstatsApp.mainColor : '#FFFFFF';
  const fontStyle = isPrice ? styles.isPrice : styles.isNotPrice;
  return (
    <TouchableOpacity
      style={[styles.buttonView, buttonStyle, {backgroundColor: color}]}
      onPress={Event}>
      <Text style={[styles.buttonText, {color: fontColor}, fontStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default LitleButton;

const styles = StyleSheet.create({
  buttonView: {
    height: 38,
    width: 90,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isPrice: {
    fontSize: 21,
  },
  isNotPrice: {
    fontSize: 17,
  },
});
