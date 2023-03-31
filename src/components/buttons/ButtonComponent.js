import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import ConstatsApp from '../../constants/ConstatsApp';

const ButtonComponent = ({
  buttonText = '',
  buttonStyle = null,
  buttonColor = ConstatsApp.mainColor,
  buttonTextColor = '#FFFFFF',
  isBold = false,
  onPressFun = null,

}) => {
  return (
    <TouchableOpacity style={[
      styles.ButtonBackground,
      buttonStyle,
      {backgroundColor: buttonColor},
    ]}
    onPress={onPressFun}>
        <Text style={[styles.ButtonText,{color: buttonTextColor, fontWeight: isBold? 'bold': 'normal'}]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  ButtonBackground: {
    height: 52,
    width: "100%",
    borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 17,
  },
});
