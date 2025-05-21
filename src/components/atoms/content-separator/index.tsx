import {View, StyleSheet, ViewStyle} from "react-native";
import {colors} from "../../../theme/colors";

interface ContentSeparatorProps {
    theme: string;
    style?: ViewStyle
}
const ContentSeparator = ({theme, style = {}} : ContentSeparatorProps) => {
    return (
        <View style={[Styles.container,style ,{ backgroundColor :  theme === 'dark' ? colors.primary : colors.white}]} />
    )
}

const Styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 3,
    }
})
export default ContentSeparator