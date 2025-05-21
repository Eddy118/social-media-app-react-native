import {View, Image, StyleSheet, ImageProps} from 'react-native'
import {RF} from "../../../utils/helper";
import PressableContainer from "../../organisms/PressableContainer";
import Label from "../../atoms/label";
import fonts from "../../../theme/fonts";

type ActionIconProps = {
    onPress: () => void;
    img : ImageProps,
    count: number | string
}
const ActionIcon = ({img , onPress, count} : ActionIconProps) => {
return (
    <View style={Styles.container}>
        <PressableContainer onPress={onPress}>
            <Image style={[Styles.actionImg, {tintColor : '#222222'}]} source={img} />
        </PressableContainer>
        <Label style={Styles.label} title={count} />
    </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        flexDirection : 'row', alignItems : 'center'
    },
    actionImg : {
        width : RF(22), resizeMode : 'contain',
        height : RF(22)
    },
    label : {
        fontFamily : fonts.Instagram.medium,
        fontSize : RF(13),
        marginLeft : 5,
    }
})

export default ActionIcon;