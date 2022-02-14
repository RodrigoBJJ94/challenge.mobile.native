import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    searchMain: {
        flex: 1,
        backgroundColor: '#3f3f3f',
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
    searchIcon: {
        alignSelf: 'flex-end',
        marginTop: -54,
        marginRight: 40,
    },
    image: {
        width: 140,
        height: 165,
        borderRadius: 6,
    },
    titles: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 15.3,
        color: '#ffffff',
    },
    search: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 68,
        marginBottom: 15,
        color: '#ffffff',
        borderBottomWidth: 1.2,
        borderBottomColor: '#dd1b7c',
        fontSize: 20,
    }
});
