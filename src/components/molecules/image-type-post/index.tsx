import {StyleSheet, View, Image} from "react-native";
import {wp} from "../../../utils";


type ImageTypePostProps = {
    url : string
}
const ImageTypePost = ({url} : ImageTypePostProps) => {
    return(
        <View style={Styles.container}>
                <Image source={{uri : url}}  style={Styles.imgStyle}/>
        </View>
    )
};

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        borderRadius: wp(2),
    },
    imgStyle : {
        width : '100%', height : '100%', resizeMode : 'contain'
    }
})
export default  ImageTypePost;