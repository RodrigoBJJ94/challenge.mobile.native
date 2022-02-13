import React from "react";
import { SafeAreaView, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function NotLoading() {
    return (
        <SafeAreaView style={Styles.viewDetails}>
            <SafeAreaView style={Styles.viewGoBack}>
                <TouchableOpacity style={Styles.buttonGoBack}>
                    <Icon name="chevron-left" size={28} color="#ffffff" style={Styles.iconButton} />
                    <Text style={Styles.goBack}>Back</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <ActivityIndicator color="#fe1487" style={Styles.load} />
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    viewDetails: {
        flex: 1,
        backgroundColor: "#3f3f3f",
    },
    viewGoBack: {
        backgroundColor: "#fe1487",
        width: "100%",
        paddingTop: 74,
        paddingBottom: 6,
    },
    goBack: {
        color: "#ffffff",
        fontSize: 16,
        position: "absolute",
        marginLeft: 26,
    },
    buttonGoBack: {
        position: "absolute",
        height: 30,
        width: "25%",
        marginTop: 42,
        justifyContent: "center",
    },
    iconButton: {
        marginLeft: -1,
    },
    load: {
        marginTop: 5,
    }
});
