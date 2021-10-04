import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ModalNotas(props) {
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
        color: "#FFF",
        
        
        
    }



})