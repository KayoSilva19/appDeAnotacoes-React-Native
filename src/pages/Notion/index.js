import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, Modal, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ModalDetalhes from '../ModalDetalhes';

export default function Login() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);

  function Logout() {
    navigation.dispatch(StackActions.popToTop());
  }

  function abrirModal() {
    setModalVisible(true);
  }

  function sairModal() {
    setModalVisible(false);
  }

  return (

    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="#bfff8c" />
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../assets/logo.jpg')}
        />
          <TouchableOpacity
          onPress={abrirModal}
        >
          <FontAwesome
            style={styles.iconInfo}
            name="info-circle"
            size={20}
            color="#FFF"
            
          />
        </TouchableOpacity>


        <TouchableOpacity
          onPress={Logout}
        >
          <FontAwesome
            style={styles.iconLogout}
            name="sign-out"
            size={25}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
      <View>
      

        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <ModalDetalhes fechar={sairModal} />
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0"
  },
  header: {
    height: 80,
    backgroundColor: "#bfff8c",
    borderBottomRightRadius: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  iconLogout: {
    marginRight: 35,
    marginTop: 15

  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 18,
    marginTop: 15

  },
  iconInfo: {
    marginTop: 55,
    marginRight: 175 
  }


});
