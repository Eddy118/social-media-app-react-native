import React from "react";
import {Image, ImageSourcePropType, StyleProp,TextStyle, StyleSheet, TextInput, View} from "react-native";
import { colors } from "../../../theme/colors";
import CommonStyles from "../../../common/commonStyles";
import {wp} from "../../../utils";

interface searchInputType {
    numeric?: string,
    value : string,
    secureTextEntry?: boolean
    fullWidth?: boolean,
    placeholder?: string,
    onChangeText: (val : string) => void,
    style?: StyleProp<TextStyle>,
    error?: string,
    icon?: ImageSourcePropType,
}

const  SearchInput = ({ style, fullWidth, numeric, value, secureTextEntry, placeholder, onChangeText,error, icon } : searchInputType) => {

    return (
        <View style={CommonStyles.centerContainer}>
            <TextInput
                style={[ styles.Input, style, fullWidth ? { width: '100%' } : null ]}
                value={value}
                keyboardType={numeric ? 'numeric' : 'default'}
                secureTextEntry={secureTextEntry || false }
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={colors.black}
            />
            {icon && <Image source={icon} style={styles.icon} />}
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        minWidth : wp(70),
        paddingLeft : 20,
        height : '70%'
    },
    icon : {
        width : 20 ,
        height : 20 ,
        resizeMode : 'contain',
        position : 'absolute',
        right : 20,
        bottom : 28,
    }
});
export default SearchInput;