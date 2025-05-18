import {StyleSheet} from "react-native";
import {wp} from "../../utils";
import {colors} from "../../theme/colors";

const CommonStyles = StyleSheet.create({
    buttonContainer: {
        width : wp(60),
        height : 50,
        backgroundColor : colors.primary,
        borderRadius : wp(10),
    },
    centerContainer: {
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'center',
    },

});
export default CommonStyles;