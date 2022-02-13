import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Button({ setTextSearch, text }) {
    return (
        <TouchableOpacity onPress={() => setTextSearch(text)}>
            <Icon name="search" size={30} color="#dd1b7c" style={Styles.search} />
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    search: {
        alignSelf: 'flex-end',
        marginTop: -90,
        marginBottom: 30,
        marginRight: 40,
    }
});
