import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  Image, TextInput, KeyboardAvoidingView,
  SafeAreaView, TouchableOpacity,
  StatusBar, Modal, Button,
  FlatList
} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ModalDetalhes from '../ModalDetalhes';
import TaskList from '../../components/TaskList';
import * as Animatable from 'react-native-animatable';
import ModalNotas from '../ModalNotas';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function Login() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [controlModal, setControlModal] = useState(false);
  const [task, setTask] = useState(['']);

  function Logout() {
    navigation.dispatch(StackActions.popToTop());
  }

  function abrirModal() {
    setModalVisible(true);
  }

  function sairModal() {
    setModalVisible(false);
  }

  function openModal() {
    setControlModal(true);
  }

  function closeModal() {
    setControlModal(false);
  }
  
  return (

    <SafeAreaView style={styles.container}>

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
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
        >
          <ModalDetalhes fechar={sairModal} />
        </Modal>
      </View>

      <View style={styles.notas}>
        <Text style={styles.textNotas}> Suas Notas </Text>
      </View>

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={controlModal}
      >
        <ModalNotas close={closeModal} />
      </Modal>

      <AnimatedBtn
        style={styles.fab}
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        onPress={openModal}
      >
        <FontAwesome
          name="plus"
          size={35}
          color="#FFF"
        />

      </AnimatedBtn>


    </SafeAreaView>

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
  },
  notas: {
    alignItems: 'center',
    width: 200,
    marginTop: 30,
    alignSelf: 'center'
  },
  textNotas: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#59a31d",
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: "#bfff8c",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }

  }


});
