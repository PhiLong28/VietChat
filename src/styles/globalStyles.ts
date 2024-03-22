import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColors";
import { fontfamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.white,
    },

    text: {
        fontFamily: fontfamilies.regular,
        fontSize: 14,
        color: appColors.text,

    }

})