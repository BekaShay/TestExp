import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import TextInputComponent from '../../components/TextInputComponent';
import ConstatsApp from '../../ConstatsApp';

const SignInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


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
      <TextInputComponent
        paramPlaceholder="Повторите Пароль"
        paramValue={passwordConfirm}
        paramOnChange={setPasswordConfirm}
      />
      <ButtonComponent buttonText="Зарегистрироваться" buttonStyle={loginButtonStyle} />
      <ButtonComponent
        buttonText="У меня уже есть аккаунт"
        buttonColor="#8D29761A"
        buttonTextColor={ConstatsApp.mainColor}
      />
    </View>
  );
};

export default SignInView;

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
