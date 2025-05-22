import { Platform } from "react-native";
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Toast from "react-native-toast-message";

interface ToastMessage {
    title?: string,
    message: string
}

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

const showSuccessToast = ({ title, message }: ToastMessage) => {
    Toast.show({
        type: "success",
        text1: title ?? "",
        text2: message,
        visibilityTime : 5000
    });
};
const showErrorToast = ({ title, message }: ToastMessage) => {
    Toast.show({
        type: "error",
        text1: title ?? "",
        text2: message,
        visibilityTime: 5000,
    });
};

const showWarningToast = ({ title, message }: ToastMessage) => {
    Toast.show({
        type: "info",
        text1: title ?? "",
        text2: message,
    });
};


const validateEmail = (email : string) =>  {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        showErrorToast({message : 'Invalid email'});
        return false;
    }

    return true;
}

export {
    isIOS,
    wp,
    hp,
    RF,
    RFPer,
    AppFonts,
    showWarningToast,
    showErrorToast,
    showSuccessToast,
    validateEmail
};