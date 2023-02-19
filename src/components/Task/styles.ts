import { StyleSheet } from "react-native";
import { themeColor } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: themeColor['gray-500'],
        marginBottom: 8,
        borderRadius: 8
    },

    checkButton: {
        width: 18,
        height: 18,
        borderColor: themeColor['blue'],
        borderRadius: 9999,
        borderWidth: 2,
        marginRight: 12
    },
    checkButtonActived: {
        width: 18,
        height: 18,
        backgroundColor: themeColor['purple-dark'],
        marginRight: 12,
        borderRadius: 9999,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        color: themeColor['white'],
        fontWeight: '400',
        fontSize: 14,
        flex: 1
    },
    textActived: {
        color: themeColor['gray-300'],
        fontWeight: '400',
        textDecorationLine: 'line-through',
        fontSize: 14,
        flex: 1
    },
    trashButton:{
        width: 32,
        height: 32,
        marginLeft: 8,
       
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})