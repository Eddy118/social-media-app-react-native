import {View, StyleSheet} from "react-native";
import {hp, wp} from "../../../utils";
import TextTypePost from "../text-type-post";
import {colors} from "../../../theme/colors";
import {Post} from "../../../shared/type/commonTypes.ts";
import ImageTypePost from "../image-type-post";
import VideoTypePost from "../video-type-post";

interface  PostListItemProps {
    post: Post
}

const PostListItem = ({post : {post_type, post_content}} : PostListItemProps) => {

    const renderTextPost =  () => <TextTypePost content={post_content} />

    const renderImagePost = () =>   <View style={Styles.imgPostContainer}>
        <ImageTypePost url={post_content} /></View>

    const renderVideoPost = () => <VideoTypePost url={post_content} />

    return (
        <View style={Styles.container}  >
            {post_type === 'text' && renderTextPost()}
            {post_type === 'video' && renderVideoPost()}
            {post_type === 'image' && renderImagePost()}
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        display : 'flex',
        width:"100%",
        height : hp(40),
        backgroundColor : colors.white,
        borderWidth : 2 ,
        borderColor : colors.white,
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomRightRadius : wp(1),
        borderBottomStartRadius : wp(1)
    },
    imgPostContainer : {
        width : '100%', height : '100%'
    }
})
export default PostListItem;