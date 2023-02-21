import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import ConstatsApp from '../../constants/ConstatsApp';

const SwichButtonComponent = ({
  styleBackView = null,
  firstButtonWidth = 141,
  firstText = '',
  secondText = '',
  focus = null,
  setFocus = null,
}) => {
  return (
    <View style={[styles.backView, styleBackView]}>
      <TouchableOpacity
        style={[
          styles.firstButton,
          {
            width: firstButtonWidth,
            backgroundColor: focus ? ConstatsApp.mainColor : '#FFFFFF',
          },
        ]}
        onPress={() => setFocus(false)}>
        <Text
          style={[
            styles.TextStyle,
            {color: focus ? '#FFFFFF' : ConstatsApp.mainColor},
          ]}>
          {firstText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.secondButton,
          {backgroundColor: focus ? '#FFFFFF' : ConstatsApp.mainColor},
        ]}
        onPress={() => setFocus(true)}>
        <Text
          style={[
            styles.TextStyle,
            {color: focus ? ConstatsApp.mainColor : '#FFFFFF'},
          ]}>
          {secondText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwichButtonComponent;

const styles = StyleSheet.create({
  backView: {
    backgroundColor: ConstatsApp.mainColor,
    width: 345,
    height: 38,
    borderRadius: 4,
    padding: 2,
    flexDirection: 'row',
  },
  firstButton: {
    backgroundColor: 'red',
    height: '100%',
    borderRadius: 3,
  },
  secondButton: {
    backgroundColor: 'blue',
    height: '100%',
    flex: 1,
    borderRadius: 3,
  },
  TextStyle: {
    margin: 7,
    alignSelf: 'center',
    fontSize: 17,
  },
});
