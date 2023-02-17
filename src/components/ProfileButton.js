import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NextLogo} from '../assets/svgIcons';

const ProfileButton = ({
  title = 'Beka Shaymov',
  text = 'BekaShaymov@gmail.com',
  imageUri = null,
}) => {
  return (
    <View style={styles.profileView}>
      <Image style={styles.image} source={{uri: imageUri}} />
      <View style={styles.textView}>
        <Text style={styles.titelProfile}>{title}</Text>
        <Text style={styles.textProfile}>{text}</Text>
      </View>
      <NextLogo />
    </View>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  profileView: {
    backgroundColor: '#FFFFFF',
    height: 79,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#0000001A',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 16,
  },
  textView: {
    marginLeft: 15,
    flex: 1,
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#AEEEEE',
  },
  titelProfile: {
    fontSize: 17,
    color: '#111621',
  },
  textProfile: {
    fontSize: 14,
    color: '#BCBCBC',
    marginTop: 6,
  },
});
