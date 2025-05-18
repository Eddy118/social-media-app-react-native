import {StyleSheet} from "react-native";
import {hp, wp} from "../../utils";
import {RF} from "../../utils/helper";
import Fonts from "../../theme/fonts";
import {colors} from "../../theme/colors";

const Styles = StyleSheet.create({
    container : {
        flex : 1, justifyContent : 'center', alignItems : 'center'
    },
    logo : {
        width : wp(20), height : hp(20), resizeMode : 'contain'
    },
    textInput: {
        fontSize : RF(12), fontFamily : Fonts.Instagram.regular,
        marginTop : 10
    },
    actionTextStyle : {
        color : colors.text, fontFamily : Fonts.Instagram.bold
    },
    secondaryActionTextContainer : {
        flexDirection : 'row', marginTop : hp(2)
    },
    secondaryActionLabel : {
        fontSize : wp(3.5), fontFamily : Fonts.Instagram.regular
    },
    secondaryActionBtnContainer : {
        marginLeft : 5
    },
    secondaryActionBtnText: {
        fontSize : wp(3.5), fontFamily : Fonts.Instagram.bold
    }
})
export default Styles;