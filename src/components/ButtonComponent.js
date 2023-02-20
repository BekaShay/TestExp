import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ConstatsApp from '../ConstatsApp';

const ButtonComponent = ({
  buttonText = '',
  buttonStyle = null,
  buttonColor = ConstatsApp.mainColor,
  buttonTextColor = '#FFFFFF',
}) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.ButtonBackground,
          buttonStyle,
          {backgroundColor: buttonColor},
        ]}>
        <Text style={[styles.ButtonText,{color: buttonTextColor}]}>{buttonText}</Text>
      </View>
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
    lineHeight: 17,
  },
});
