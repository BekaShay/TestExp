import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { AuthController, ProfileController } from '../../api/controllers/API_Controllers';
import ButtonComponent from '../../components/buttons/ButtonComponent';
import TextInputComponent from '../../components/TextInputComponent';
import ConstatsApp from '../../constants/ConstatsApp';
import { setStorage } from '../../storage/LocalStorage';
import { useAuth } from '../../context/AuthContext';
import { CommonActions } from '@react-navigation/native';

const LogInView = ({navigation}) => {
  const { setIsAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputData = useRef({
    email: email,
    password: password,
  });
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'MainPageScreen' }],
  });
  const OnPressLogIn = async () => {
    console.log('fasf');
    inputData.current.email = email;
    inputData.current.password = password;


    const response = await AuthController.getUser(inputData.current);
    setIsAuth(true);
    await setStorage("TOKEN", response?.data?.access_token)
    console.log('Your token : ',response?.data?.access_token);

    navigation.reset({
      index: 0,
      routes: [{name: 'MainPageScreen'}],
    });
  }

  return (
    <View style={styles.LogInView}>
      <TextInputComponent
        paramPlaceholder="E-mail адрес"
        paramValue={email}
        paramOnChange={setEmail}
      />
      <TextInputComponent
        paramPlaceholder="Пароль"
        paramValue={password}
        paramOnChange={setPassword}
      />
      <ButtonComponent buttonText="Войти" buttonStyle={loginButtonStyle} onPressFun={OnPressLogIn}/>
      <ButtonComponent
        buttonText="Регистрация"
        buttonColor="#8D29761A"
        buttonTextColor={ConstatsApp.mainColor}
      />
    </View>
  );
};

export default LogInView;

const styles = StyleSheet.create({
  LogInView: {
    // backgroundColor: 'green',
    height: '100%',
    width: '100%',
    paddingTop: 12,
  },
});

const loginButtonStyle = {
  marginTop: 24,
  marginBottom: 10,
};
