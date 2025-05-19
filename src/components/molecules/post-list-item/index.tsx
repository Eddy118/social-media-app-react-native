import {View , Text} from "react-native";
import {hp} from "../../../utils";

interface  PostListItemProps {
    title : string;
}

const PostListItem = ({title} : PostListItemProps) => {
    return (
        <View style={{width:"100%", height : hp(30), backgroundColor : 'red'}}  >
            <Text>
                {title}
            </Text>
        </View>
    );
}
export default PostListItem;