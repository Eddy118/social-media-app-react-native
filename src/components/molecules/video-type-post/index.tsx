import {StyleSheet} from "react-native";
import {wp} from "../../../utils";
import Video from 'react-native-video';

type VideoTypePostProps = {
    url : string
}
const VideoTypePost = ({url} : VideoTypePostProps) => {
    return(
            <Video
                source={{ uri: url }}
                style={Styles.container}
                resizeMode="cover"
                paused={false}
                onError={(e) => console.log('Video error', e)}
                onLoadStart={() => console.log('Loading video')}
                onLoad={() => console.log('Video loaded')}
                onBuffer={(e) => console.log('Buffering', e)}
            />
    )
};

const Styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%', // Or whatever height you want
            borderRadius: wp(2),
            overflow: 'hidden',
        },

})
export default  VideoTypePost;