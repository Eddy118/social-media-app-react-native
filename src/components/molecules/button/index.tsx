import {Pressable, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from "react-native";

interface ButtonProps {
    onPress: () => void;
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const Button = ({onPress,title, style ={}, textStyle = {}} : ButtonProps ) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}
export default  Button;