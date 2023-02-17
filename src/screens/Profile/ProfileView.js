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
            <Text style={styles.EditProfileText}>{'>'}</Text>
        </View>
      </View>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  ProfileView: {
    width: '100%',
    height: 79,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#0000001A'
  },
  ProfileAvatar: {
    backgroundColor: 'green',
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  ProfileInfo: {
    // backgroundColor: 'red',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  ProfileName: {
    fontSize: 17,
  },
  ProfileShortInfo: {
    fontSize: 14,
    color: '#BCBCBC',
    marginTop: 6,    
  },
  EditProfile: {
    // backgroundColor: 'green',
    height: 20,
    width: 20,
    marginRight: 4,
  },
  EditProfileText: {
    color: '#808191',
    fontSize: 20,
    alignSelf: 'center',    
  },
});
