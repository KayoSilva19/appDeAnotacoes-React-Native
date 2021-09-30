import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headertyle}>
                <StatusBar backgroundColor="#B6FF7C" barStyle="light-content" ></StatusBar>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
       
    },
    headertyle: {
        height: 30,
        backgroundColor: "#B6FF7C"
    }
});