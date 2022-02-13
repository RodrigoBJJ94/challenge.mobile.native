import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import SearchInput from "./SearchInput";
import Icon from "react-native-vector-icons/Feather";

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
            <TouchableOpacity onPress={() => setTextSearch(text)}>
                <Icon name="search" size={30} color="#dd1b7c" style={Styles.search} />
            </TouchableOpacity>
            {list.data && (
                <View style={Styles.searchDirection}>
                    {list.data.map((anime) => (
                        <View key={anime.id} style={Styles.searchContainer} >
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("9", {
                                    anime: anime.attributes.canonicalTitle
                                });
                            }}>
                                <Image source={{ uri: anime.attributes.posterImage.small }} style={Styles.image} />
                            </TouchableOpacity>
                            <Text style={Styles.titles}>
                                {anime.attributes.canonicalTitle}
                            </Text>
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
    },
    image: {
        width: 140,
        height: 159,
        borderRadius: 6,
    },
    titles: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 15.3,
        color: '#ffffff'
    },
    search: {
        alignSelf: 'flex-end',
        marginTop: -90,
        marginBottom: 30,
        marginRight: 40
    },

});
