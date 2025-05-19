import {View, StyleSheet} from "react-native";
import { FlashList } from "@shopify/flash-list";
import {useCallback} from "react";
import PostListItem from "../post-list-item";
import {wp} from "../../../utils";
import ContentSeparator from "../../atoms/content-separator";

const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
];

const CustomListing = () => {
    const renderListItem = useCallback((title : string) => {
        return(
            <PostListItem title={title} />
        );
    }, []);

    return (
        <View style={{flex : 1}}>
            <FlashList
                data={DATA}
                renderItem={({ item  }) => renderListItem(item.title)  }
                estimatedItemSize={200}
                contentContainerStyle={Styles.contentContainer}
                ItemSeparatorComponent={() => <ContentSeparator />}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    contentContainer : {
        padding : wp(1)
    }
});

export default CustomListing