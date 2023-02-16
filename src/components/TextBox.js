import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextBox = ({placeholder = '', TextBoxValue=null, TextBoxOnChange=null}) => {
  return (
    <View style={styles.TextBoxView}>
        <TextInput style={styles.TextBoxText}
        placeholder={placeholder}
        value={TextBoxValue}
        onChange={TextBoxOnChange}/>
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  TextBoxView: {
    // backgroundColor: 'green',
    width: '100%',
    height: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    justifyContent: 'center',
  },
  TextBoxText: {
    fontSize: 17,
  },
});
