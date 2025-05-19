import React from "react";
import { View, Image, TouchableOpacity, StyleSheet} from "react-native";
import {Images} from "../../../constants/images.tsx";
import {hp, wp} from "../../../utils";
import {colors} from "../../../theme/colors";
import {useNavigation} from "@react-navigation/native";
import SearchInput from "../searchInput";
import {Strings} from "../../../constants";

interface HeaderProps {
    title?: string;
    showBack?: boolean;
    showLogo?: boolean;
    showProfile?: boolean;
}
const Header = ({title, showBack = false, showProfile = true} : HeaderProps) => {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            {showBack ? <TouchableOpacity style={Styles.backImg} onPress={() => navigation.goBack()}><Image  source={Images.backArrow} tintColor={colors.white} style={Styles.backImg}/></TouchableOpacity> :  <Image source={Images.logo} tintColor={colors.white} style={{width : wp(10), resizeMode : 'contain'}}/>}
            <SearchInput style={[Styles.backImg, {backgroundColor : colors.gray}]} placeholder={Strings.SearchPost} value={''} onChangeText={() => {}} />
            {showProfile && <TouchableOpacity style={Styles.backImg} onPress={() => navigation.goBack()}><Image  source={Images.logo
            } tintColor={colors.white} style={Styles.backImg}/></TouchableOpacity>}
        </View>
    );
}

const Styles = StyleSheet.create({
    container : {
        width : '100%', height : hp(7), justifyContent : 'space-between', paddingHorizontal : wp(1), flexDirection : 'row', alignItems: 'center'
    },
    backImg : {
        width : wp(10),
        resizeMode : 'contain'
    }
})
export default Header;