import {StyleSheet, View} from "react-native";
import {AppFonts, wp} from "../../../utils/helper";
import Fonts from "../../../theme/fonts";
import Label from "../../atoms/label";

type TextTypePostProps = {
    content : string
}
const TextTypePost = ({content} : TextTypePostProps) => {
    return(
        <View style={Styles.container}>
            <Label style={Styles.labelStyle} title={content} />
        </View>
    )
};

const Styles = StyleSheet.create({
    container : {
        width : '90%',
        borderRadius: wp(2),
    },
    labelStyle : {
        textAlign : 'center',fontSize : AppFonts.rf13, fontFamily : Fonts.Instagram.medium
    }
})
export default  TextTypePost;