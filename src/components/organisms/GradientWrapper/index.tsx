import {ReactNode} from "react";
import LinearGradient from 'react-native-linear-gradient';

const GradientWrapper = ({ children }: { children: ReactNode }) => {
    return(
        <LinearGradient
            colors={['#FDEBEB', '#FFD3E2', '#E5D3FF', '#D2E4FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{flex : 1}}
        >
                {children}
        </LinearGradient>
    )
}
export default GradientWrapper