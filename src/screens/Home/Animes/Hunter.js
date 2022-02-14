import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ImageHome from "../ImageHome";
import TitleEnJp from "../Titles/TitleEnJp";
import Styles from "./Styles";

export default function Hunter({ navigation }) {
    const [hunter, setHunter] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=hunter`)
            .then(res => res.json())
            .then(res => {
                setHunter(res);
            })
    }, []);

    return (
        <>
            {
                hunter.data && (
                    <SafeAreaView style={{}}>
                        {hunter.data.slice(1, 2).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleEnJp anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )
            }
        </>
    )
};
