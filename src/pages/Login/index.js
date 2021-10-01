import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../Header';


export default function Login() {
    const navigation = useNavigation();

    function IrCad(){
        navigation.navigate('Cadastro');
    }

    function IrNotion(){
      navigation.navigate('Notion');
    }
    
  return (

    <KeyboardAvoidingView style={styles.container1}>
      <View style={styles.styleContainer}>
        <Header />
        <Image
          style={styles.img}
          source={require('../../assets/logo.jpg')}
        />
        <View style={styles.containerLogin}>

          <View style={styles.formLogin}>
            <TextInput
              style={styles.inputEmail}
              placeholderTextColor="#bdbfbb"
              placeholder='Digite seu email'
            >
            </TextInput>

            <TextInput
              secureTextEntry={true}
              style={styles.inputSenha}
              placeholderTextColor="#bdbfbb"
              placeholder='Digite sua senha'
            >
            </TextInput>

            <TouchableOpacity 
              style={styles.btnLogin}
              onPress={IrNotion}
            >

              <Text style={styles.textLogin}> Login </Text>

            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.btnCad}
              onPress={IrCad}  
            // onPress={() => navigation.navigate('Cadastro')}
            
            >
              <Text style={styles.textCad}> Quero me cadastrar! </Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,

  },
  styleContainer: {
    height: 850,
    borderBottomEndRadius: 350,
    backgroundColor: '#B6FF7C',

  },
  containerLogin: {
    flex: 1,
    alignItems: 'center'


  },
  formLogin: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
    marginTop: 30,
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center'

  },
  inputEmail: {
    height: 50,
    width: 300,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#fafafa",
    backgroundColor: "#FFF",
    marginLeft: 18,
    marginRight: 18,
    marginTop: 10,
    padding: 10,
    color: "#bdbfbb",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  inputSenha: {
    height: 50,
    width: 300,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#fafafa",
    backgroundColor: "#FFF",
    marginLeft: 18,
    marginRight: 18,
    marginTop: 15,
    padding: 10,
    color: "#bdbfbb",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  btnLogin: {
    height: 50,
    width: 200,
    marginTop: 25,
    borderRadius: 7,
    backgroundColor: "#B6FF7C",
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLogin: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 17
  },
  textCad: {
    color: "#B6FF7C",
    fontSize: 15,
    marginTop: 10,
    
  }

});
