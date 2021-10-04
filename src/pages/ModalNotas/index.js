import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default function ModalNotas(props) {
    const [input, setInput] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerModal}>
                <TouchableOpacity
                    onPress={props.close}
                    style={{
                        margin: 15,
                        marginTop: 20
                    }}
                >
                    <FontAwesome
                        name="arrow-left"
                        size={30}
                        color="#FFF"

                    />
                </TouchableOpacity>
                <Text style={styles.titleModal}> Nova Tarefa </Text>
            </View>
            <Animatable.View
                style={styles.modalBody}
                animation="fadeInUp"
            >
                <TextInput
                    style={styles.input}
                    multiline={true}
                    autoCorrect={false}
                    placeholder="O que precisa fazer hoje?"
                    placeholderTextColor="#cccccc"
                    value={input}
                    onChangeText={(texto) => setInput(texto)}

                >
                </TextInput>
                <TouchableOpacity
                    style={styles.handleAdd}
                    onPress={props.cad}
                >
                    <Text style={styles.handleAddtext}> Criar Nota </Text>
                </TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bfff8c"
    },
    headerModal: {
        marginLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'

    },
    titleModal: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#FFF"

    },
    modalBody: {
        margin: 15,
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 9,
        height: 85,
        textAlignVertical: 'top',
        color: "#cccccc"
    },
    handleAdd: {
        backgroundColor: "#FFF",
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 5
    },
    handleAddtext: {
        fontSize: 18,
        color: "#cccccc"
    }





})