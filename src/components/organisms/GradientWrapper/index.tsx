import {ReactNode} from "react";
import LinearGradient from 'react-native-linear-gradient';
import {ViewStyle} from "react-native";

const GradientWrapper = ({ children, style = {} }: { children: ReactNode, style?: ViewStyle }) => {
    return(
        <LinearGradient
            colors={['#FDEBEB', '#FFD3E2', '#E5D3FF', '#D2E4FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style}

        >
                {children}
        </LinearGradient>
    )
}
export default GradientWrapper