import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {CloseLogo, PCLogo} from '../../assets/icons/svgIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LitleButton from '../LitleButton';
import CountButtonComponent from '../buttons/CountButtonComponent';

const BascetItem = () => {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.itemView}>
      <View style={styles.titleView}>
        <Image style={styles.image} />
        <View style={styles.titleTextView}>
          <Text style={styles.title}>TempText</Text>
          <Text style={styles.info}>TempText</Text>
          <PCLogo />
        </View>
        <TouchableOpacity>
          <CloseLogo />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Количество страниц: </Text>
        <Text style={styles.text}>ISBN: </Text>
        <Text style={styles.text}>Год выпуска: </Text>
      </View>
      <View style={styles.buttonsView}>
        <CountButtonComponent count={count} setCount={setCount} />
        <LitleButton isPrice buttonStyle={{marginLeft: 10}} />
        <LitleButton isSecondStyle buttonStyle={{marginLeft: 10}} />
      </View>
    </View>
  );
};

export default BascetItem;

const styles = StyleSheet.create({
  itemView: {
    height: 230,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  titleView: {
    flexDirection: 'row',
    marginTop: 16,
  },
  image: {
    backgroundColor: 'silver',
    height: 66,
    width: 45,
    borderRadius: 3,
  },
  titleTextView: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 17,
    color: '#333333',
    marginBottom: 6,
  },
  info: {
    fontSize: 15,
    color: '#777777',
    marginBottom: 6,
  },
  textView: {
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 5,
  },
  buttonsView: {
    flexDirection: 'row',
  },
});
