import { StyleSheet } from "react-native";
import { themeColor } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColor['background'],
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 8
    },
    formContainer:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: -25
    },
    inputArea: {
        flex: 1,
        padding: 16,
        height: 52,
        backgroundColor: themeColor['gray-500'],
        borderRadius: 6,
        color: themeColor['white']

    },
    button: {
        height: 52,
        width: 52,
        backgroundColor: themeColor['blue-dark'],
        borderRadius: 6,
        marginLeft: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    activeButton: {
        backgroundColor: 'red'
    },
    listContainer: {
        marginTop: 32,
        height: 530
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    contentContanier: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    created: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        color: themeColor['blue']
    },
    completed: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        color: themeColor['purple']
    },
    counter: {
        marginLeft: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: themeColor['gray-400'],
        borderRadius: 9999,
        color: themeColor['white'],
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '700'
    },
    listEmpty: {
        display: 'flex',
        flexDirection: 'column',
        borderTopColor: themeColor['gray-400'],
        borderTopWidth: 1,
        alignItems: "center",
        paddingTop: 48
    },
    boldText: {
        fontWeight: '700',
        fontSize: 14,
        color: themeColor['gray-300'],
        marginTop: 16
    },
    text: {
        fontWeight: '400',
        fontSize: 14,
        color: themeColor['gray-300']
    }
})