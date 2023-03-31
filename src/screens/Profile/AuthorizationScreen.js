import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SwichButtonComponent from '../../components/buttons/SwichButtonComponent';
import LogInView from './LogInView';
import SignInView from './SignInView';

const AuthorizationScreen = ({navigation}) => {
  const [loginOrSignin, setLoginOrSignin] = useState(1);

  return ( 
    <View style={styles.mainScreenBackView}>
      <SwichButtonComponent
        firstText="Вход"
        secondText="Регистрация"
        focus={loginOrSignin}
        setFocus={setLoginOrSignin}
      />
      {(loginOrSignin?<SignInView />:<LogInView navigation={navigation}/>)}      
    </View>

  );
};

export default AuthorizationScreen;

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

