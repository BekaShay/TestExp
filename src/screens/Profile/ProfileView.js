import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { EditProfileLogo } from '../../assets/svgIcons';

const ProfileView = ({name = '', email = ''}) => {
  return (
      <View style={styles.ProfileView}>
        <View style={styles.ProfileAvatar}></View>
        <View style={styles.ProfileInfo}>
          <Text style={styles.ProfileName}>{name}</Text>
          <Text style={styles.ProfileShortInfo}>{email}</Text>
        </View>
        <View style={styles.EditProfile}>
            <EditProfileLogo/>
        </View>
      </View>
    
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  ProfileView: {
    // backgroundColor: 'blue',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileAvatar: {
    backgroundColor: 'green',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  ProfileInfo: {
    // backgroundColor: 'red',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  ProfileName: {
    fontSize: 20,
  },
  ProfileShortInfo: {
    fontSize: 14,
    opacity: 0.55,
  },
  EditProfile: {
    height: 40,
    width: 40,
  },
});
