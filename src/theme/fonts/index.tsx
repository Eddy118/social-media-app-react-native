import { isIOS } from "../../utils/";

export default {
    Instagram: {
        light: isIOS() ? "InstagramSans-Light" : "InstagramSansLight",
        bold: isIOS() ? "InstagramSans-Bold" : "InstagramSansBold",
        medium: isIOS() ? "InstagramSans-Medium" : "InstagramSansMedium",
        regular: isIOS() ? "InstagramSans" : "InstagramSans"
    },
};