import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LikeLogo} from '../../assets/icons/svgIcons';
import LogoTextButton from '../../components/buttons/LogoTextButton';
import BascetItem from '../../components/items/BascetItem';

const BascetScreen = () => {
  return (
    <View style={styles.backView}>
      <LogoTextButton Logo={LikeLogo} />
      <BascetItem/>
    </View>
  );
};

export default BascetScreen;

const styles = StyleSheet.create({
  backView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF'
  },
});
