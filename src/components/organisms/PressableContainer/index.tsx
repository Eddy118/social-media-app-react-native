import {Children, ReactNode} from "react";
import {Pressable, Text, View, ViewStyle} from 'react-native'

interface  PressableContainerProps {
    children: ReactNode,
    onPress: () => void,
    style?: ViewStyle,
}
const PressableContainer = ({ children , onPress, style = {}}: PressableContainerProps) => {
    return (
        <Pressable style={style} onPress={() => onPress()}>
            {children}
        </Pressable>
    )
}
export default PressableContainer;