import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default function TaskList({ data }) {
    return (
        <Animatable.View
            style={styles.container}
            animation="bounceIn"
            useNativeDriver
        >
            <TouchableOpacity

                style={{ flexDirection: 'row' }}>
                <FontAwesome
                    name="check-circle"
                    size={30}
                    color="#B6FF7C"

                />
                <View>
                    <Text style={styles.txtNotion}> {data.task} </Text>
                </View>

            </TouchableOpacity>
        </Animatable.View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3

        },
        alignItems: 'center'
    },
    txtNotion: {
        color: "#707070",
        fontSize: 20,
        paddingLeft: 8,
        paddingRight: 20
    }

});