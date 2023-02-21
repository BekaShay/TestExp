import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonComponent from '../../components/buttons/ButtonComponent';
import TextInputComponent from '../../components/TextInputComponent';
import ConstatsApp from '../../constants/ConstatsApp';

const LogInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <ButtonComponent buttonText="Войти" buttonStyle={loginButtonStyle} />
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
