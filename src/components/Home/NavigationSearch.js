import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function NavigationSearch({ navigation }) {
    const [list, setList] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=one`)
            .then(res => res.json())
            .then(res => {
                setList(res)
            })
    }, []);

    return (
        <View style={{ backgroundColor: "#9e487a"}}>
            <StatusBar backgroundColor="#9e487a" />
            <Icon.Button name="search" size={30} color="#dd1b7c" style={Styles.search} onPress={() => navigation.navigate("8")} />       
        </View>
    );
};

const Styles = StyleSheet.create({
    viewDirection: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    viewText: {
        backgroundColor: '#fe1485',
        padding: 4,
        borderRadius: 20,
        width: 206,
        height: 30,
        marginTop: 25,
        alignItems: "center",
    },
    title: {
        color: '#ffffff',
        fontSize: 14,
    },
    image: {
        width: 340,
        height: 560,
        borderRadius: 10
    },
    search: {
        backgroundColor: '#9e487a',
        justifyContent: "flex-end",
        paddingTop: 20
    }
});

