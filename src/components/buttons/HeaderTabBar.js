import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ConstatsApp from '../../constants/ConstatsApp';

const HeaderTabBar = ({data = null, focus = 0, setFocus = null}) => {

  function FunOnPress(index) {
    console.log(index);
    setFocus(index);
  }

  return (
    <View style={styles.view}>
      {data?.map((item, index) => (
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderBottomColor: focus == index ? ConstatsApp.mainColor : null,
              borderBottomWidth: focus == index ? 2 : null,
            },
          ]}
          onPress={() => FunOnPress(index)}>
          <Text>{item?.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HeaderTabBar;

const styles = StyleSheet.create({
  view: {
    height: 48,
    width: '100%',
    backgroundColor: '#FEFEFE',
    flexDirection: 'row',
    elevation: 10,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  button: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
