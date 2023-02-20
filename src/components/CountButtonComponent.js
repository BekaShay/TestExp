import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CountButtonComponent = ({count = 0, setCount = null}) => {
  const plus = () => setCount(count + 1);
  const minus = () => (count ? setCount(count - 1) : null);
  return (
    <View style={styles.countView}>
      <TouchableOpacity style={styles.buttonView}
      onPress={minus}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.countTextView}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.buttonView}
      onPress={plus}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountButtonComponent;

const styles = StyleSheet.create({
  countView: {
    height: 38,
    width: 120,
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    alignSelf: 'center',
    fontSize: 17,
  },
  countTextView: {
    flex: 1,
  },
  buttonText: {
    fontSize: 24,
    color: '#909090',
  },
  buttonView: {
    height: 34,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
