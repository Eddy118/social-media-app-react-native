import { Platform } from "react-native";
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const isIOS = () => {
    return Platform.OS === "ios";
};

const wp = (percent: number) => widthPercentageToDP(percent);
const hp = (percent: number) => heightPercentageToDP(percent);

const RF = (val : number) => RFValue(val);
const RFPer = (val : number) => RFPercentage(val);
export {
    isIOS,
    wp,
    hp,
    RF,
    RFPer
};