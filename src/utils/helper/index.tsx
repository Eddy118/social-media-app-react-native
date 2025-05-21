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

const AppFonts = {
    rf1 : RF(1),
    rf2: RF(2),
    rf3 : RF(3),
    rf4 : RF(4),
    rf5 : RF(5),

    rf10 : RF(10),
    rf13 : RF(13),
    rf15 : RF(15),

}
export {
    isIOS,
    wp,
    hp,
    RF,
    RFPer,
    AppFonts
};