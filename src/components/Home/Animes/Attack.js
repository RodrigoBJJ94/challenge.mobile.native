import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, Image } from "react-native";
import TitleEn from "../Titles/TitleEn";
import Styles from "./Styles";

export default function Attack({ navigation }) {
    const [attack, setAttack] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=attack`)
            .then(res => res.json())
            .then(res => {
                setAttack(res);
            })
    }, []);


    return (
        <>
            {attack.data && (
                <SafeAreaView style={{}}>
                    {attack.data.slice(0, 1).map((anime) => (
                        <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("Details", {
                                    anime: "attack"
                                });
                            }}>
                                <Image style={Styles.image}
                                    source={{ uri: anime.attributes.posterImage.original }}
                                />
                            </TouchableOpacity>
                            <TitleEn anime={anime} />
                        </SafeAreaView>
                    ))}
                </SafeAreaView>
            )}
        </>
    )
};
