import  { View, StyleSheet } from "react-native";
import {colors} from "../../../theme/colors";

const ContentSeparator = () => {
    return (
        <View style={Styles.container} />
    )
}

const Styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 3,
        backgroundColor : colors.white
    }
})
export default ContentSeparator