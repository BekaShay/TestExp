import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExitModalComponent = ({modalVisible = false, Event=null, setModalVisible=false}) => {
  
  return (
    <Modal style={{position: 'absolute'}} animationType='fade' visible={modalVisible}>
      <View  style={styles.modal}>
        <View style={styles.modalView}>
          <Text style={styles.warningTitle}>Внимание!</Text>
          <Text style={styles.warningText}>
            Вы точно хотите выйти из аккаунта?
          </Text>
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={Event}><Text style={styles.buttonText}>Да</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}><Text style={styles.buttonText}>Нет</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExitModalComponent;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#33333380',
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 124,
    padding: 15,
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 16,
  },
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  button: {
    // backgroundColor: 'green',
    margin: 12,
    marginLeft: 18,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'green',
  }
});
