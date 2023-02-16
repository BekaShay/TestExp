import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SwichButtonComponent from '../../components/SwichButtonComponent';
import LogInView from './LogInView';
import SignInView from './SignInView';

const ProfileScreenFalse = () => {
  const [loginOrSignin, setLoginOrSignin] = useState(true);

  return (
    
    <View style={styles.mainScreenBackView}>
      <SwichButtonComponent
        firstText="Вход"
        secondText="Регистрация"
        focus={loginOrSignin}
        setFocus={setLoginOrSignin}
      />
      {(loginOrSignin?<SignInView />:<LogInView/>)}      
    </View>

  );
};

export default ProfileScreenFalse;

const styles = StyleSheet.create({
  mainScreenBackView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    alignItems: 'center',
  },
});
