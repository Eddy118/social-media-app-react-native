import React from "react";
import { View, Image, TouchableOpacity, StyleSheet} from "react-native";
import {Images, SCREENS} from "../../../constants";
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
    onChangeText ?: (text: string) => void;
}

const Header = ({ showBack = false, showProfile = true, onChangeText} : HeaderProps) => {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            {showBack ? <TouchableOpacity style={Styles.backIcon} onPress={() => navigation.goBack()}><Image  source={Images.backArrow} tintColor={colors.white} style={Styles.backImg}/></TouchableOpacity> :  <Image source={Images.appLogo} style={{width : wp(10) , resizeMode : 'contain'}}/>}
            <SearchInput onFocus={() => navigation.navigate(SCREENS.SEARCH)}  style={[Styles.backImg, {backgroundColor : colors.white}]} placeholder={Strings.searchPost} value={''} onChangeText={(val) => onChangeText && onChangeText(val)} />
            {showProfile && <TouchableOpacity style={Styles.backImg} onPress={() => navigation.navigate(SCREENS.PROFILE)}><Image  source={Images.user
            } style={Styles.backImg}/></TouchableOpacity>}
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
    },
    backIcon : {
        width : wp(8),
        resizeMode : 'contain'
    }
})
export default Header;