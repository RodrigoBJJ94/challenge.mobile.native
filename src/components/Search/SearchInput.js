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
        marginTop: 68,
        marginBottom: 15,
        color: '#ffffff',
        borderBottomWidth: 1.2,
        borderBottomColor: '#dd1b7c',
        fontSize: 20,
    }
});
