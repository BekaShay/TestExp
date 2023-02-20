import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextBox = ({placeholder = '', TextBoxValue=null, TextBoxOnChange=null, isPassword=false}) => {
  return (
    <View style={styles.TextBoxView}>
        <TextInput style={styles.TextBoxText}
        placeholder={placeholder}
        value={TextBoxValue}
        onChange={TextBoxOnChange}/>
        {isPassword?<Text>tempLogo</Text>:null}
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
    flexDirection: 'row',
  },
  TextBoxText: {
    fontSize: 17,
    flex: 1,
    // marginLeft: 4,
  },
});
