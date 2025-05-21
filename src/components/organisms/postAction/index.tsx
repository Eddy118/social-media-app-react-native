import {StyleSheet, View} from 'react-native'
import  {Images} from '../../../constants'
import ActionIcon from '../../molecules/action-Icon'

type PostActionProps = {
    likeCount : number | string,
    commentCount : number | string,
}

const PostAction = ({likeCount ,commentCount } :PostActionProps ) => {
    return (
        <View style={Styles.container}>
            <ActionIcon img={Images.comment} onPress={() => {}} count={commentCount}/>
            <ActionIcon img={Images.heart} onPress={() => {}} count={likeCount}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    container : {
        justifyContent : 'space-between', height : '100%'
    }
})

export default PostAction;