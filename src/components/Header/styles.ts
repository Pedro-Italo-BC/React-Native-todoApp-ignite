import { StyleSheet } from "react-native";
import { themeColor } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 170,
        backgroundColor: themeColor['gray-700'],
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
})