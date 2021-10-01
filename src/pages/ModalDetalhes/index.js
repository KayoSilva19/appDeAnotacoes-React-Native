import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function ModalDetalhes(props) {
    return (
        <View style={styles.container}>

            <View style={styles.modal}>

                <View style={styles.headerModal}>
                    <Text style={{ fontWeight: 'bold', color: '#FFF', marginLeft: 10, fontSize: 18 }}> GreenNotion</Text>
                    <TouchableOpacity
                        style={styles.btnFechar}
                        onPress={props.fechar}
                    >

                        <FontAwesome
                            style={styles.iconFechar}
                            size={25}
                            color="#FFF"
                            name="window-close"
                        />

                    </TouchableOpacity>
                </View>

                <View style={styles.containerText}>

                    <Text style={styles.textInfo}> Nosso aplicativo visa auxiliar você em suas tarefase e
                        também anotações do seu dia a dia! Esperamos que tenha a melhor experiência possivel!</Text>
                </View>

                <View style={styles.containerBtnFechar}>
                    <TouchableOpacity
                        style={styles.btnContainerFechar}
                        onPress={props.fechar}
                    >
                        <Text style={{ fontSize: 18, color: "#FFF" }}>FECHAR</Text>

                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modal: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 350,
        borderRadius: 7
    },
    headerModal: {
        height: 50,
        backgroundColor: "#bfff8c",
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnFechar: {
        marginRight: 18
    },
    textInfo: {
        color: "#bdbfbb",
        fontSize: 18,
        marginTop: 25,
        margin: 18
    },
    containerBtnFechar: {
        alignItems: 'center'
    },
    btnContainerFechar: {
        backgroundColor: "#bfff8c",
        height: 50,
        width: 150,
        borderRadius: 7,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    }


})