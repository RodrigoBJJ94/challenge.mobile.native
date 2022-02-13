import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Searchbar from "./Searchbar";
import Data from "./Data";

export default function HomeFive({ navigation }) {
    const [list, setList] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=naruto`)
            .then(res => res.json())
            .then(res => {
                setList(res);
            })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }}
                colors={['#4B232A', '#846747', '#472A22', '#665242', '#D4AD95', '#4C2823', '#34302E', '#BA6A3D']}>
                <Searchbar navigation={navigation} />
                {list.data && (
                    <SafeAreaView >
                        {list.data.slice(2, 3).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <Data navigation={navigation} anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
            </LinearGradient>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    viewDirection: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
    }
});
