import { Platform } from "react-native";
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from "react-native-responsive-screen";

const isIOS = () => {
    return Platform.OS === "ios";
};

const wp = (percent: number) => widthPercentageToDP(percent);
const hp = (percent: number) => heightPercentageToDP(percent);

export {
    isIOS,
    wp,
    hp
};