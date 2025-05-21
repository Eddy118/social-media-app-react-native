import {Children, ReactNode} from "react";
import {Pressable, Text, View} from 'react-native'

interface  PressableContainerProps {
    children: ReactNode,
    onPress: () => void,
}
const PressableContainer = ({ children , onPress}: PressableContainerProps) => {
    return (
        <Pressable onPress={() => onPress()}>
            {children}
        </Pressable>
    )
}
export default PressableContainer;