import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import SearchInput from "./SearchInput";
import Button from "./Button";
import Data from "./Data";

export default function Search({ navigation }) {
    const [text, setText] = useState("");
    const [textSearch, setTextSearch] = useState("");
    const [list, setList] = useState({});

    useEffect(() => {
        if (text) {
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${textSearch}`)
                .then(res => res.json())
                .then(res => {
                    setList(res);
                })
        }
    }, [text, textSearch]);

    return (
        <View style={Styles.searchMain}>
            <SearchInput value={text} setText={(search) => setText(search)} />
            <Button setTextSearch={setTextSearch} text={text} />
            {list.data && (
                <View style={Styles.searchDirection}>
                    {list.data.map((anime) => (
                        <View key={anime.id} style={Styles.searchContainer} >
                            <Data navigation={navigation} anime={anime} />
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

const Styles = StyleSheet.create({
    searchMain: {
        flex: 1,
        backgroundColor: '#3f3f3f'
    },
    searchDirection: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    searchContainer: {
        width: Dimensions.get("screen").width / 2.9,
        marginRight: 20,
        marginLeft: 20,
        alignItems: "center",
    }
});
