import {View, StyleSheet, ActivityIndicator} from "react-native";
import { FlashList } from "@shopify/flash-list";
import {JSX} from "react";
import {hp, wp} from "../../../utils";

import {colors} from "../../../theme/colors";
import ContentSeparator from "../../atoms/content-separator";

type GenericListingProps<T> = {
    renderComponent : (item: T) => JSX.Element,
    onRefresh?: () => void;
    refreshing?: boolean,
    onReachEnd?: () => void,
    data : T[],
    horizontal?: boolean,
    ItemSeparatorComponent : () => JSX.Element,
}

const GenericListing = ({data,renderComponent, onRefresh, refreshing = false, onReachEnd, horizontal = false, ItemSeparatorComponent} : GenericListingProps<any>) => {
    return (
        <View style={Styles.listingContainer}>
            <FlashList
                horizontal={horizontal}
                onRefresh={() => onRefresh && onRefresh()}
                data={data}
                renderItem={({ item  , index}) => renderComponent(item)  }
                estimatedItemSize={50}
                refreshing={refreshing}
                ItemSeparatorComponent={() => <ItemSeparatorComponent />}
                contentContainerStyle={Styles.contentContainer}
                ListEmptyComponent={() => refreshing ? <ActivityIndicator size="large" color={colors.white} /> : <></>}
                onEndReachedThreshold={0.7}
                onEndReached={() =>  onReachEnd && onReachEnd()}
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

export default GenericListing