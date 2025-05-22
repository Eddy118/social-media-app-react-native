import { useEffect } from "react";
import {View, StyleSheet} from "react-native";
import LottieView from "lottie-react-native";
import { SCREENS } from "../../constants";
import {StackActions, useNavigation} from "@react-navigation/native";
import AppContainer from "../../components/organisms/AppContainer";
import {getItemByKey, wp} from "../../utils";
import {USER_DETAILS} from "../../constants/asyncStorageKeys.tsx";

const SplashScreen = () => {

    const initialRender = async () => {
        const user = await getItemByKey(USER_DETAILS);
        setTimeout(() => {
            const screen = user ? SCREENS.HOME : SCREENS.LOGIN
            navigation.dispatch(StackActions.replace(SCREENS.HOME));
        }, 4500);
    }
    const navigation = useNavigation();
    useEffect(() => {
        initialRender()
    }, []);
    return (
        <AppContainer>
            <View style={Styles.container}>
                <LottieView
                    source={require("../../assets/animations/social.json")}
                    autoPlay
                    loop
                    style={Styles.lottieAnimation}
                />
            </View>
        </AppContainer>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lottieAnimation: {
        width: wp(90),
        height: 300,
    },
});
export default SplashScreen;