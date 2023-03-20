import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderTabBar from '../../components/buttons/HeaderTabBar';

const ReadNowView = () => {
  return <View style={styles.readNowView}></View>;
};

const ElectronicAudioView = () => {
  return <View style={styles.electronicAudioView}></View>;
};

const MyBooksHeaderBarList = [
  {
    title: 'ЧИТАЮ СЕЙЧАС',
    component: <ReadNowView />,
  },
  {
    title: 'ЭЛЕКТРОННАЯ/АУДИО',
    component: <ElectronicAudioView />,
  },
];

const MyBooksScreen = () => {
    const [focus, setFocus] = useState(0);
    return (
    <View>
      <HeaderTabBar
        data={MyBooksHeaderBarList}
        focus={focus}
        setFocus={setFocus}
      />
      {MyBooksHeaderBarList.map((item, index) =>
        focus == index ? item.component : null,
      )}
    </View>
  );
};

export default MyBooksScreen;

const styles = StyleSheet.create({
  readNowView: {
    height: '100%',
    width: '100%',
  },
  electronicAudioView: {
    height: '100%',
    width: '100%',
  },
});
