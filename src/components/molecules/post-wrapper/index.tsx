import {ReactNode, ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {hp, wp} from "../../../utils";

const PostWrapper = ({ children, profile,actions }: { children: ReactNode, profile : ReactElement, actions : ReactElement }) => {
    return (
        <View>
            {profile}
            <View>
                {children}
                <View style={Styles.actionsContainer}>
                    {actions}
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    actionsContainer : {
        height : hp(9),padding : wp(2), justifyContent : 'space-between',position : 'absolute', right : 10 , bottom : 0, alignItems : 'center'
    }
})
export default PostWrapper;