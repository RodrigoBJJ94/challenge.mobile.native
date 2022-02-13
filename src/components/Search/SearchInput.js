import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchInput({ value, setText }) {
    return (
        <TextInput
            onChangeText={(text) => setText(text)}
            value={value}
            style={Styles.search}
        />
    );
};

const Styles = StyleSheet.create({
    search: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50,
        marginBottom: 50,
        color: '#ffffff',
        borderBottomWidth: 1.3,
        borderBottomColor: '#dd1b7c',
        fontSize: 20,
    }
});
