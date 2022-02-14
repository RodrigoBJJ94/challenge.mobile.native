import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    viewDirection: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
        width: Dimensions.get("screen").width,
    },
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
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    image: {
        width: 340,
        height: 540,
        borderRadius: 20,
    }
});
