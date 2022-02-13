import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Statusbar from "./Statusbar";
import Searchbar from "./Searchbar";
import Data from "./Data";

export default function HomeOne({ navigation }) {
    const [list, setList] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=kimetsu`)
            .then(res => res.json())
            .then(res => {
                setList(res);
            })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }}
                colors={['#450F20', '#3F1B45', '#8C3D6F', '#924651', '#4D3355', '#5B425C', '#D5676A']}>
                <Statusbar />
                <Searchbar navigation={navigation} />
                {list.data && (
                    <SafeAreaView>
                        {list.data.slice(6, 7).map((anime) => (
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
