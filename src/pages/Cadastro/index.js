import React from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {
    const navigation = useNavigation();

    function volta() {
        navigation.navigate("Login");
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar backgroundColor="#bfff8c" />
            <View style={styles.styleContainer}>
              
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bfff8c"



    },
    styleContainer: {
        height: 900,
        backgroundColor: "#FFF"
    }
});