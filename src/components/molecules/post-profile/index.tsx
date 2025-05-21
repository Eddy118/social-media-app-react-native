import {View, Image, StyleSheet} from "react-native";
import {colors} from "../../../theme/colors";
import {Images} from '../../../constants'
import Label from "../../atoms/label";
import {hp, wp} from "../../../utils";
import Fonts from "../../../theme/fonts";
import ContentSeparator from "../../atoms/content-separator";
import {RF} from "../../../utils/helper";
type PostProfileProps = {
    name : string
}

const PostProfile = ( {name} : PostProfileProps) => {
    return(
        <>
            <View style={Styles.container}>
                <View style={Styles.contentContainer}>
                    <View style={Styles.createProfileContainer}>
                        <Image style={Styles.profileImage} source={Images.avatar} />
                        <View style={Styles.labelContainer}>
                            <Label style={Styles.nameLabel} title={name} />
                            <Label style={Styles.timeLabel}  title={`${Math.floor(Math.random() * 60) + 1} min ago`} />
                        </View>

                    </View>
                    <View>
                        <Image source={Images.action} style={{resizeMode : 'contain', width : 25 , height : 25}} />
                    </View>
                </View>
            </View>
            <ContentSeparator theme={'dark'} />
        </>

    );
}

const Styles = StyleSheet.create({
    container : {
        width :'100%',paddingVertical : hp(1), justifyContent : 'center' , backgroundColor : colors.white, borderTopStartRadius : wp(1) ,borderTopEndRadius : wp(1)
    },
    contentContainer: {
        flexDirection : 'row', justifyContent : 'space-between', paddingHorizontal : wp(3), alignItems : 'center'
    },
    createProfileContainer : {
        flexDirection : 'row', alignItems : 'center'
    },
    profileImage : {
        width : 40 , height : 40, resizeMode : 'contain'
    },
    labelContainer : {
        paddingLeft : wp(1)
    },
    nameLabel : {
        fontFamily : Fonts.Instagram.medium, fontSize :  RF(12)
    },
    timeLabel : {
        fontFamily : Fonts.Instagram.light, fontSize :  RF(10)
    }
})
export default PostProfile;