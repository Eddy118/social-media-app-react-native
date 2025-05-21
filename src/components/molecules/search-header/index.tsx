import React from "react";
import { View, Image, TouchableOpacity, StyleSheet} from "react-native";
import {Images, SCREENS} from "../../../constants";
import {hp, wp} from "../../../utils";
import {colors} from "../../../theme/colors";
import {useNavigation} from "@react-navigation/native";
import SearchInput from "../searchInput";
import {Strings} from "../../../constants";

interface SearchHeaderProps {
    title?: string;
    showBack?: boolean;
    showLogo?: boolean;
    showProfile?: boolean;
    onChangeText: (value: string) => void;
}

const SearchHeader = ({ onChangeText} : SearchHeaderProps) => {

    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <SearchInput style={[Styles.backImg, {backgroundColor : colors.white}]} placeholder={Strings.SearchPost} value={''} onChangeText={onChangeText} />
         <TouchableOpacity style={Styles.backIcon} onPress={() => navigation.goBack()}><Image  source={Images.close} tintColor={colors.white} style={Styles.backImg}/></TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container : {
        width : '100%', height : hp(7), paddingHorizontal : wp(2), flexDirection : 'row', alignItems: 'center', justifyContent : 'space-around'
    },
    backImg : {
        width : wp(5),
        resizeMode : 'contain'
    },
    backIcon : {
        width : wp(8),
        resizeMode : 'contain'
    }
})
export default SearchHeader;