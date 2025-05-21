import {View, StyleSheet, ActivityIndicator} from "react-native";
import { FlashList } from "@shopify/flash-list";
import {useCallback} from "react";
import PostListItem from "../post-list-item";
import {hp, wp} from "../../../utils";
import ContentSeparator from "../../atoms/content-separator";
import PostWrapper from "../post-wrapper";
import PostProfile from "../post-profile";
import {Post} from "../../../shared/type/commonTypes.ts";
import {colors} from "../../../theme/colors";
import PostAction from "../../organisms/postAction";

type CustomListingContainerProps = {
    posts : Post[];
    onRefresh : () => void;
    refreshing?: boolean,
    onReachEnd: () => void
}

const CustomListing = ({posts, onRefresh, refreshing = false, onReachEnd} : CustomListingContainerProps) => {
    const renderListItem = useCallback((post : Post) => {
        return(
                <PostWrapper
                    profile ={<PostProfile name={post.influencer_name}/>}
                    actions ={<PostAction likeCount={post.likes_count} commentCount={post.comments.length} />}
                >
                    <PostListItem post={post} />
                </PostWrapper>
        );
    }, []);

    return (
        <View style={Styles.listingContainer}>
            <FlashList
                onRefresh={() => onRefresh()}
                data={posts}
                renderItem={({ item  }) => renderListItem(item)  }
                estimatedItemSize={200}
                refreshing={refreshing}
                contentContainerStyle={Styles.contentContainer}
                ListEmptyComponent={() => refreshing ? <ActivityIndicator size="large" color={colors.white} /> : <></>}
                ItemSeparatorComponent={() => <ContentSeparator style={Styles.separatorContainer} theme={'dark'}/>}
                onEndReachedThreshold={0.7}
                onEndReached={() => onReachEnd()}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    listingContainer: {
      flex : 1
    },
    contentContainer : {
        padding : wp(3),
    },
    separatorContainer: {
        paddingVertical : hp(0.5)
    }
});

export default CustomListing