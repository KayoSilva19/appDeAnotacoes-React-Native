import React from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Button, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function Cadastro() {
    const navigation = useNavigation();

    function IrNotion() {
        navigation.navigate("Notion");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "height" : "padding"}
            style={styles.container}

        >
            <StatusBar backgroundColor="#bfff8c" />
            <View style={styles.styleContainer}>
                <Image
                    style={styles.img}
                    source={require('../../assets/logo.jpg')}
                />
                <View style={styles.containerForm}>
                    <View>
                        <TextInput
                            style={styles.inputEmail}
                            placeholder="Digite seu melhor email"
                            placeholderTextColor="#bdbfbb"
                        />

                        <TextInput
                            style={styles.inputSenha}
                            placeholder="Digite sua senha"
                            secureTextEntry={true}
                            placeholderTextColor="#bdbfbb"
                        />
                        <TouchableOpacity
                            style={styles.btnCad}
                            onPress={IrNotion}
                        >
                            <Text style={styles.txtCad}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ width: 25, alignSelf: "flex-end" }}
                        >
                            <FontAwesome
                                style={styles.iconVoltar}
                                name="chevron-left"
                                size={25}
                                color="#FFF"

                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bfff8c",



    },
    styleContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopEndRadius: 300,
        justifyContent: 'center'
    },
    containerForm: {
        alignItems: 'center',
        height: 300,
        backgroundColor: "#bfff8c",
        borderRadius: 25,
        margin: 18,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    inputEmail: {
        height: 50,
        width: 300,
        marginTop: 60,
        marginLeft: 18,
        backgroundColor: '#FFF',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#fafafa",
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
        marginTop: 18,
        marginLeft: 18,
        backgroundColor: '#FFF',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#fafafa",
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
    img: {
        height: 100,
        width: 100,
        marginTop: 50,
        borderRadius: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: "#bfff8c"

    },
    btnCad: {
        marginTop: 20,
        height: 50,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF",
        borderRadius: 7,


    },
    txtCad: {
        fontWeight: 'bold',
        fontSize: 17,
        color: "#bfff8c",
        alignSelf: 'center'
    },
    iconVoltar: {
        color: "#FFF",
        
    }
});