import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Searchbar({ navigation }) {
    return (
        <TouchableOpacity style={Styles.buttonSearch} onPress={() => navigation.navigate("8")}>
            <Icon name="search" size={30} color="#dd1b7c" style={Styles.search} />
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    buttonSearch: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        width: "100%",
        alignItems: "center",
        height: 65,
        marginTop: 30,
    },
    search: {
        alignSelf: "flex-end",
        paddingTop: 20,
        paddingRight: 25,
    }
});
