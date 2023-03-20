import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import ConstatsApp from '../../constants/ConstatsApp';

const SwichButtonComponent = ({
  styleBackView = null,
  firstButtonWidth = 141,
  secondButtonWidth = null,
  firstText = '',
  secondText = '',
  thirdText = '',
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
        onPress={() => setFocus(0)}>
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
          {backgroundColor: focus == 1 ? '#FFFFFF' : ConstatsApp.mainColor,
          width: secondButtonWidth
        },
        ]}
        onPress={() => setFocus(1)}>
        <Text
          style={[
            styles.TextStyle,
            {color: focus == 1 ? ConstatsApp.mainColor : '#FFFFFF'},
          ]}>
          {secondText}
        </Text>
      </TouchableOpacity>
      {thirdText?<TouchableOpacity
        style={[
          styles.secondButton,
          {backgroundColor: focus == 2 ? '#FFFFFF' : ConstatsApp.mainColor},
        ]}
        onPress={() => setFocus(2)}>
        <Text
          style={[
            styles.TextStyle,
            {color: focus == 2 ? ConstatsApp.mainColor : '#FFFFFF'},
          ]}>
          {thirdText}
        </Text>
      </TouchableOpacity>: null}
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
